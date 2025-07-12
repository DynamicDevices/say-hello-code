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

// Get all language names
const existingNames = languagesArray.map(lang => lang.name);

console.log(`📊 Current Collection Analysis:`);
console.log(`Total languages: ${languagesArray.length}`);

// Analyze by categories
const categories = {};
const paradigms = {};
const years = {};
const creators = {};

languagesArray.forEach(lang => {
    // Categories
    if (lang.categories) {
        lang.categories.forEach(cat => {
            categories[cat] = (categories[cat] || 0) + 1;
        });
    }
    
    // Paradigms
    if (lang.paradigms) {
        lang.paradigms.forEach(paradigm => {
            paradigms[paradigm] = (paradigms[paradigm] || 0) + 1;
        });
    }
    
    // Years
    const decade = Math.floor(lang.year / 10) * 10;
    years[decade] = (years[decade] || 0) + 1;
    
    // Creators
    if (lang.creator) {
        creators[lang.creator] = (creators[lang.creator] || 0) + 1;
    }
});

console.log(`\n📈 Categories (${Object.keys(categories).length}):`);
Object.entries(categories).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count}`);
});

console.log(`\n🔧 Paradigms (${Object.keys(paradigms).length}):`);
Object.entries(paradigms).sort((a, b) => b[1] - a[1]).forEach(([paradigm, count]) => {
    console.log(`  ${paradigm}: ${count}`);
});

console.log(`\n📅 Decades:`);
Object.entries(years).sort((a, b) => a[0] - b[0]).forEach(([decade, count]) => {
    console.log(`  ${decade}s: ${count}`);
});

console.log(`\n👥 Top Creators:`);
Object.entries(creators).sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([creator, count]) => {
    console.log(`  ${creator}: ${count}`);
});

// Identify gaps and opportunities
console.log(`\n🎯 GAP ANALYSIS:`);

// Missing major categories/domains
const missingCategories = [
    "Quantum Computing",
    "Blockchain/Smart Contracts", 
    "IoT/Embedded Systems",
    "Machine Learning/AI",
    "Robotics",
    "Bioinformatics",
    "Financial/Algorithmic Trading",
    "Real-time Systems",
    "Distributed Systems",
    "Formal Verification"
];

console.log(`\n📋 Missing Major Categories:`);
missingCategories.forEach(cat => {
    console.log(`  - ${cat}`);
});

// Recent languages (2020+) that might be missing
const recentLanguages = [
    "Vale", "Bend", "Carbon", "Mojo", "Grain", "Roc", "Unison", "Janet", "Wren", "Haxe"
];

console.log(`\n🆕 Recent Languages (2020+):`);
recentLanguages.forEach(lang => {
    const hasLang = existingNames.includes(lang);
    console.log(`  ${hasLang ? '✅' : '❌'} ${lang}`);
});

// Ultra-obscure/experimental languages
const obscureLanguages = [
    "Whitespace", "INTERCAL", "Ook!", "Malbolge", "Befunge", "Chef", "Shakespeare",
    "Piet", "LOLCODE", "Brainfuck", "SNUSP", "Befunge-98", "LOOP"
];

console.log(`\n🤪 Esoteric Languages:`);
obscureLanguages.forEach(lang => {
    const hasLang = existingNames.includes(lang);
    console.log(`  ${hasLang ? '✅' : '❌'} ${lang}`);
});

// Historical/legacy languages that might be missing
const historicalLanguages = [
    "ALGOL W", "Modula-3", "Oberon-2", "Component Pascal", "PL/I", "Simula",
    "BCPL", "CPL", "CORAL 66", "JOVIAL", "MUMPS", "PL/M", "JOSS", "HyperTalk"
];

console.log(`\n📜 Historical Languages:`);
historicalLanguages.forEach(lang => {
    const hasLang = existingNames.includes(lang);
    console.log(`  ${hasLang ? '✅' : '❌'} ${lang}`);
});

// Domain-specific languages that might be missing
const domainSpecificLanguages = [
    "Verilog", "VHDL", "SystemVerilog", "SPICE", "MATLAB", "Maple", "Mathematica",
    "SageMath", "Maxima", "Octave", "R", "SAS", "SPSS", "Stata", "LabVIEW"
];

console.log(`\n🔬 Domain-Specific Languages:`);
domainSpecificLanguages.forEach(lang => {
    const hasLang = existingNames.includes(lang);
    console.log(`  ${hasLang ? '✅' : '❌'} ${lang}`);
});

console.log(`\n💡 RECOMMENDATIONS:`);
console.log(`1. Focus on missing major categories (Quantum, Blockchain, IoT, ML/AI)`);
console.log(`2. Add recent experimental languages (2020+)`);
console.log(`3. Include more domain-specific languages`);
console.log(`4. Consider ultra-obscure esoteric languages for completeness`);
console.log(`5. Add missing historical/legacy languages`); 