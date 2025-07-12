const fs = require('fs');

// Read the languages.js file
const content = fs.readFileSync('js/languages.js', 'utf8');

// List of duplicates to remove (keeping the original, removing the new ones)
const duplicatesToRemove = [
  'INTERCAL',  // Keep "Intercal" (index 63), remove "INTERCAL" (index 242)
  'Icon',      // Keep "Icon" (index 60), remove "Icon" (index 246) 
  'REXX',      // Keep "Rexx" (index 129), remove "REXX" (index 248)
  'SNOBOL',    // Keep "SNOBOL" (index 140), remove "SNOBOL" (index 253)
  'Whitespace', // Keep "Whitespace" (index 163), remove "Whitespace" (index 256)
  'Falcon',    // Keep "Falcon" (index 229), remove "Falcon" (index 258)
  'Euphoria'   // Keep "Euphoria" (index 189), remove "Euphoria" (index 259)
];

// Parse the languages array to find and remove duplicates
const startMarker = 'var languages = [';
const endMarker = '];';

const startIndex = content.indexOf(startMarker);
const endIndex = content.lastIndexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find languages array markers');
  process.exit(1);
}

const arrayContent = content.substring(startIndex + startMarker.length, endIndex);

// Parse the array content to extract language objects
const languages = [];
let currentObject = '';
let braceCount = 0;
let inString = false;
let escapeNext = false;

for (let i = 0; i < arrayContent.length; i++) {
  const char = arrayContent[i];
  
  if (escapeNext) {
    currentObject += char;
    escapeNext = false;
    continue;
  }
  
  if (char === '\\') {
    escapeNext = true;
    currentObject += char;
    continue;
  }
  
  if (char === '"' && !escapeNext) {
    inString = !inString;
  }
  
  if (!inString) {
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        // End of object
        try {
          const langObj = JSON.parse(currentObject);
          languages.push(langObj);
        } catch (e) {
          // Skip malformed objects
        }
        currentObject = '';
        continue;
      }
    }
  }
  
  if (braceCount > 0) {
    currentObject += char;
  }
}

// Remove duplicates, keeping the first occurrence
const seen = new Set();
const uniqueLanguages = [];

languages.forEach(lang => {
  const normalizedName = lang.name.toLowerCase().trim()
    .replace(/\s+/g, '')
    .replace(/[^\w#\+\-\.]/g, '');
  
  if (!seen.has(normalizedName)) {
    seen.add(normalizedName);
    uniqueLanguages.push(lang);
  } else {
    console.log(`Removing duplicate: ${lang.name}`);
  }
});

// Rebuild the file content
const header = content.substring(0, startIndex + startMarker.length);
const footer = content.substring(endIndex);

const newArrayContent = uniqueLanguages.map(lang => 
  JSON.stringify(lang, null, 4)
).join(',\n');

const updatedContent = header + newArrayContent + '\n' + footer;

fs.writeFileSync('js/languages.js', updatedContent);
console.log(`✅ Removed ${languages.length - uniqueLanguages.length} duplicate languages`);
console.log(`✅ Total unique languages: ${uniqueLanguages.length}`); 