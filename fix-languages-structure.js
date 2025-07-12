const fs = require('fs');

// Read the languages.js file
let content = fs.readFileSync('js/languages.js', 'utf8');

// Find the start and end of the languages array
const startIndex = content.indexOf('var languages = [') + 'var languages = ['.length;
const endIndex = content.lastIndexOf('];');

// Extract the array content
let arrayContent = content.substring(startIndex, endIndex).trim();

// Remove the first [ and the last ] if present
if (arrayContent.startsWith('[')) {
    arrayContent = arrayContent.slice(1);
}
if (arrayContent.endsWith(']')) {
    arrayContent = arrayContent.slice(0, -1);
}

// Recursively remove all leading/trailing array wrappers
function stripAllWrappers(arr) {
    while (Array.isArray(arr) && arr.length === 1 && Array.isArray(arr[0])) {
        arr = arr[0];
    }
    return arr;
}

let languages;
try {
    const parsed = JSON.parse(arrayContent);
    languages = stripAllWrappers(parsed);
    if (!Array.isArray(languages) || languages.length === 0) {
        throw new Error('No language objects found');
    }
    for (const lang of languages) {
        if (!lang.name) {
            throw new Error('Language object missing name property');
        }
    }
    console.log(`Successfully stripped wrappers, ${languages.length} languages`);
} catch (error) {
    console.error('Error parsing or stripping wrappers:', error.message);
    process.exit(1);
}

// Rebuild the file with the flat array
const header = content.substring(0, startIndex);
const footer = content.substring(content.lastIndexOf('];'));
const pretty = JSON.stringify(languages, null, 4);
const output = `${header}\n${pretty}\n${footer}`;

fs.writeFileSync('js/languages.js', output, 'utf8');
console.log('js/languages.js flattened and fixed.'); 