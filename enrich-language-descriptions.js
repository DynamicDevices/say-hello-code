// enrich-language-descriptions.js
// Robust script to enrich language descriptions in js/languages.js

const fs = require('fs');
const path = require('path');

const LANGUAGES_PATH = path.join(__dirname, 'js/languages.js');

let fileContent = fs.readFileSync(LANGUAGES_PATH, 'utf8');

// Extract the array portion between the first [ and the last ] before the export
const arrayStart = fileContent.indexOf('[');
const arrayEnd = fileContent.lastIndexOf(']');
if (arrayStart === -1 || arrayEnd === -1) {
    console.error('Could not find array in js/languages.js');
    process.exit(1);
}
const arrayText = fileContent.slice(arrayStart, arrayEnd + 1);

let languages;
try {
    languages = eval('(' + arrayText + ')');
} catch (e) {
    console.error('Failed to parse languages array:', e);
    process.exit(1);
}

function enrichDesc(lang) {
    return `${lang.name} is a programming language created in ${lang.year} by ${lang.creator}. It was designed for ${lang.primaryCategory.toLowerCase()} and is known for its ${lang.paradigms.join(', ')} paradigm(s). ${lang.name} has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as ${lang.domains && lang.domains.length ? lang.domains.join(', ') : 'various fields'}.`;
}

languages.forEach(lang => {
    lang.desc = enrichDesc(lang);
});

// Stringify the array with pretty formatting
const newArrayText = JSON.stringify(languages, null, 4);

// Replace the old array in the file content
const newFileContent = fileContent.slice(0, arrayStart) + newArrayText + fileContent.slice(arrayEnd + 1);

fs.writeFileSync(LANGUAGES_PATH, newFileContent, 'utf8');
console.log('Descriptions enriched!'); 