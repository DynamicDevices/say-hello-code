const fs = require('fs');

// Read the languages.js file
const content = fs.readFileSync('js/languages.js', 'utf8');

// The duplicates to remove (keeping the original, removing the new ones)
const duplicatesToRemove = [
  'INTERCAL',  // Remove this one, keep "Intercal"
  'Icon',      // Remove this one, keep "Icon" 
  'REXX',      // Remove this one, keep "Rexx"
  'SNOBOL',    // Remove this one, keep "SNOBOL"
  'Whitespace', // Remove this one, keep "Whitespace"
  'Falcon',    // Remove this one, keep "Falcon"
  'Euphoria'   // Remove this one, keep "Euphoria"
];

// Split the content into lines
const lines = content.split('\n');
const newLines = [];
let inObject = false;
let objectLines = [];
let skipObject = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this line starts a new object
  if (line.trim().startsWith('{')) {
    inObject = true;
    objectLines = [line];
    skipObject = false;
  } else if (inObject) {
    objectLines.push(line);
    
    // Check if this line contains a name field
    if (line.includes('"name":')) {
      const nameMatch = line.match(/"name":\s*"([^"]+)"/);
      if (nameMatch && duplicatesToRemove.includes(nameMatch[1])) {
        console.log(`Marking for removal: ${nameMatch[1]}`);
        skipObject = true;
      }
    }
    
    // Check if this line ends the object
    if (line.trim() === '},') {
      if (!skipObject) {
        newLines.push(...objectLines);
      }
      inObject = false;
      objectLines = [];
    } else if (line.trim() === '}') {
      if (!skipObject) {
        newLines.push(...objectLines);
      }
      inObject = false;
      objectLines = [];
    }
  } else {
    newLines.push(line);
  }
}

// Write the updated content
const updatedContent = newLines.join('\n');
fs.writeFileSync('js/languages.js', updatedContent);

console.log('✅ Removed duplicate languages');
console.log('✅ File updated successfully'); 