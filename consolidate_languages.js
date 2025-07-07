const fs = require('fs');
const path = require('path');

// Category mappings for each file
const categoryMappings = {
    'popular-languages.js': {
        categories: ['Popular'],
        primaryCategory: 'Popular',
        difficulty: 'Beginner to Intermediate'
    },
    'web-languages.js': {
        categories: ['Web', 'Frontend', 'Backend'],
        primaryCategory: 'Web',
        domains: ['Web Development'],
        difficulty: 'Beginner to Advanced'
    },
    'systems-languages.js': {
        categories: ['Systems', 'Low-level'],
        primaryCategory: 'Systems',
        domains: ['System Programming', 'Operating Systems'],
        difficulty: 'Advanced'
    },
    'functional-languages.js': {
        categories: ['Functional'],
        primaryCategory: 'Functional',
        paradigms: ['Functional'],
        difficulty: 'Intermediate to Advanced'
    },
    'object-oriented-languages.js': {
        categories: ['Object-Oriented'],
        primaryCategory: 'Object-Oriented',
        paradigms: ['Object-Oriented'],
        difficulty: 'Intermediate'
    },
    'scripting-languages.js': {
        categories: ['Scripting', 'Automation'],
        primaryCategory: 'Scripting',
        domains: ['Automation', 'System Administration'],
        difficulty: 'Beginner to Intermediate'
    },
    'mobile-languages.js': {
        categories: ['Mobile'],
        primaryCategory: 'Mobile',
        domains: ['Mobile Development'],
        difficulty: 'Intermediate'
    },
    'data-languages.js': {
        categories: ['Data Science', 'Analytics'],
        primaryCategory: 'Data Science',
        domains: ['Data Analysis', 'Statistics'],
        difficulty: 'Intermediate'
    },
    'numerical-languages.js': {
        categories: ['Numerical', 'Scientific'],
        primaryCategory: 'Scientific',
        domains: ['Scientific Computing', 'Mathematics'],
        difficulty: 'Advanced'
    },
    'academic-languages.js': {
        categories: ['Academic', 'Research'],
        primaryCategory: 'Academic',
        domains: ['Research', 'Formal Methods'],
        difficulty: 'Advanced'
    },
    'game-languages.js': {
        categories: ['Game Development'],
        primaryCategory: 'Game Development',
        domains: ['Game Development', 'Graphics'],
        difficulty: 'Intermediate'
    },
    'markup-languages.js': {
        categories: ['Markup', 'Documentation'],
        primaryCategory: 'Markup',
        domains: ['Documentation', 'Web'],
        difficulty: 'Beginner'
    },
    'shell-languages.js': {
        categories: ['Shell', 'Command Line'],
        primaryCategory: 'Shell',
        domains: ['System Administration', 'Automation'],
        difficulty: 'Intermediate'
    },
    'config-languages.js': {
        categories: ['Configuration', 'DevOps'],
        primaryCategory: 'Configuration',
        domains: ['DevOps', 'Infrastructure'],
        difficulty: 'Intermediate'
    },
    'legacy-languages.js': {
        categories: ['Legacy', 'Historical'],
        primaryCategory: 'Legacy',
        difficulty: 'Intermediate to Advanced'
    },
    'vintage-languages.js': {
        categories: ['Vintage', 'Historical'],
        primaryCategory: 'Vintage',
        difficulty: 'Advanced'
    },
    'esoteric-languages.js': {
        categories: ['Esoteric', 'Educational'],
        primaryCategory: 'Esoteric',
        difficulty: 'Varies'
    },
    'emerging-languages.js': {
        categories: ['Emerging', 'Modern'],
        primaryCategory: 'Emerging',
        difficulty: 'Intermediate'
    },
    'specialized-languages.js': {
        categories: ['Specialized', 'Domain-Specific'],
        primaryCategory: 'Specialized',
        difficulty: 'Advanced'
    },
    'additional-languages.js': {
        categories: ['Additional'],
        primaryCategory: 'Additional',
        difficulty: 'Varies'
    }
};

// Function to determine typing system
function getTypingSystem(name, desc) {
    const staticTyped = ['Java', 'C#', 'C++', 'C', 'TypeScript', 'Rust', 'Go', 'Scala', 'Kotlin', 'Swift'];
    const dynamicTyped = ['Python', 'JavaScript', 'Ruby', 'PHP', 'Perl'];
    
    if (staticTyped.includes(name)) return 'Static';
    if (dynamicTyped.includes(name)) return 'Dynamic';
    
    // Check description for clues
    if (desc.toLowerCase().includes('static') || desc.toLowerCase().includes('strongly typed')) return 'Static';
    if (desc.toLowerCase().includes('dynamic') || desc.toLowerCase().includes('interpreted')) return 'Dynamic';
    
    return 'Mixed';
}

// Function to determine paradigms
function getParadigms(name, desc) {
    const paradigms = [];
    
    // Object-oriented
    if (['Java', 'C#', 'C++', 'Python', 'Ruby', 'Scala', 'Kotlin', 'Swift'].includes(name) ||
        desc.toLowerCase().includes('object-oriented')) {
        paradigms.push('Object-Oriented');
    }
    
    // Functional
    if (['Haskell', 'Lisp', 'Scheme', 'Clojure', 'F#', 'Scala', 'Erlang', 'Elixir'].includes(name) ||
        desc.toLowerCase().includes('functional')) {
        paradigms.push('Functional');
    }
    
    // Procedural
    if (['C', 'Pascal', 'FORTRAN', 'COBOL'].includes(name) ||
        desc.toLowerCase().includes('procedural')) {
        paradigms.push('Procedural');
    }
    
    // Imperative
    if (['C', 'C++', 'Java', 'Python'].includes(name)) {
        paradigms.push('Imperative');
    }
    
    return paradigms.length > 0 ? paradigms : ['Multi-paradigm'];
}

// Read all language files
const jsDir = './js/backup';
const allLanguages = [];

const files = fs.readdirSync(jsDir).filter(file => file.endsWith('-languages.js'));

files.forEach(file => {
    const filePath = path.join(jsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract variable name and array content
    const match = content.match(/var\s+(\w+)\s*=\s*(\[[\s\S]*?\]);/);
    if (match) {
        try {
            // Safely evaluate the array
            const arrayContent = match[2];
            const languages = eval(arrayContent);
            
            const mapping = categoryMappings[file] || {
                categories: ['Other'],
                primaryCategory: 'Other',
                difficulty: 'Varies'
            };
            
            languages.forEach(lang => {
                // Enhance each language with metadata
                const enhancedLang = {
                    ...lang,
                    categories: mapping.categories,
                    primaryCategory: mapping.primaryCategory,
                    paradigms: getParadigms(lang.name, lang.desc || ''),
                    domains: mapping.domains || [],
                    difficulty: mapping.difficulty,
                    typing: getTypingSystem(lang.name, lang.desc || ''),
                    sourceFile: file
                };
                
                allLanguages.push(enhancedLang);
            });
        } catch (error) {
            console.error(`Error processing ${file}:`, error.message);
        }
    }
});

// Sort languages alphabetically
allLanguages.sort((a, b) => a.name.localeCompare(b.name));

// Generate the consolidated file
const output = `// Consolidated Programming Languages Collection
// Total Languages: ${allLanguages.length}
// Generated: ${new Date().toISOString()}

var languages = ${JSON.stringify(allLanguages, null, 4)};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = languages;
}
`;

// Write the consolidated file
fs.writeFileSync('./js/languages.js', output);

console.log(`✅ Consolidated ${allLanguages.length} languages into js/languages.js`);
console.log(`📁 Processed ${files.length} source files`);

// Generate summary statistics
const stats = {
    totalLanguages: allLanguages.length,
    byPrimaryCategory: {},
    byDifficulty: {},
    byTyping: {},
    byDecade: {}
};

allLanguages.forEach(lang => {
    // By primary category
    stats.byPrimaryCategory[lang.primaryCategory] = (stats.byPrimaryCategory[lang.primaryCategory] || 0) + 1;
    
    // By difficulty
    stats.byDifficulty[lang.difficulty] = (stats.byDifficulty[lang.difficulty] || 0) + 1;
    
    // By typing
    stats.byTyping[lang.typing] = (stats.byTyping[lang.typing] || 0) + 1;
    
    // By decade
    const decade = Math.floor(lang.year / 10) * 10;
    const decadeKey = `${decade}s`;
    stats.byDecade[decadeKey] = (stats.byDecade[decadeKey] || 0) + 1;
});

console.log('\n📊 Statistics:');
console.log('By Primary Category:', stats.byPrimaryCategory);
console.log('By Difficulty:', stats.byDifficulty);
console.log('By Typing System:', stats.byTyping);
console.log('By Decade:', stats.byDecade);