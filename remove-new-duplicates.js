const fs = require('fs');

// Read the current languages file
const languagesFile = 'js/languages.js';
const content = fs.readFileSync(languagesFile, 'utf8');

// Extract the languages array
const languagesMatch = content.match(/var languages = (\[[\s\S]*?\]);/);
if (!languagesMatch) {
    console.error('Could not find languages array in file');
    process.exit(1);
}

const languagesArray = JSON.parse(languagesMatch[1]);

// Languages to remove (duplicates that were already in the collection)
const duplicatesToRemove = [
    "PL/I",
    "Chapel", 
    "Vale",
    "Ceylon",
    "X10",
    "Fortress"
];

console.log(`📊 Total languages before removal: ${languagesArray.length}`);

// Remove duplicates
const filteredLanguages = languagesArray.filter(lang => {
    const shouldKeep = !duplicatesToRemove.includes(lang.name);
    if (!shouldKeep) {
        console.log(`🗑️  Removing duplicate: ${lang.name}`);
    }
    return shouldKeep;
});

console.log(`📊 Total languages after removal: ${filteredLanguages.length}`);

// Create the updated content
const updatedContent = content.replace(
    /var languages = (\[[\s\S]*?\]);/,
    `var languages = ${JSON.stringify(filteredLanguages, null, 2)};`
);

// Write the updated content back to the file
fs.writeFileSync(languagesFile, updatedContent);

console.log(`✅ Successfully removed ${duplicatesToRemove.length} duplicate languages`);
console.log(`📊 Final language count: ${filteredLanguages.length}`); 