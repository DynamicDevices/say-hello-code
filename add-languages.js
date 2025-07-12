const fs = require('fs');

const newLanguages = [
  {
    name: "SNUSP",
    year: 2004,
    creator: "Dominik Burock",
    code: `>v\n v Hello, World! <\n ^         <\n`,
    desc: "SNUSP is a minimalistic esoteric programming language with a two-dimensional instruction pointer.",
    popularity: 1,
    categories: ["Esoteric"],
    primaryCategory: "Esoteric",
    paradigms: ["Esoteric"],
    domains: ["Fun"],
    difficulty: "Advanced",
    typing: "Untyped",
    sourceFile: "esoteric-languages.js"
  },
  {
    name: "INTERCAL",
    year: 1972,
    creator: "Don Woods, James Lyon",
    code: "DO ,1 <- #13\nPLEASE DO ,1 SUB #1 <- #238\nPLEASE READ OUT ,1\nPLEASE GIVE UP",
    desc: "INTERCAL is a parody esoteric programming language designed to be as different from traditional programming languages as possible.",
    popularity: 2,
    categories: ["Esoteric"],
    primaryCategory: "Esoteric",
    paradigms: ["Esoteric"],
    domains: ["Fun"],
    difficulty: "Advanced",
    typing: "Untyped",
    sourceFile: "esoteric-languages.js"
  },
  {
    name: "Simula",
    year: 1967,
    creator: "Ole-Johan Dahl, Kristen Nygaard",
    code: "Begin\n  OutText('Hello, World!');\n  OutImage;\nEnd;",
    desc: "Simula is considered the first object-oriented programming language, designed for simulation.",
    popularity: 3,
    categories: ["Historical", "Object-Oriented"],
    primaryCategory: "Historical",
    paradigms: ["Object-Oriented"],
    domains: ["Simulation"],
    difficulty: "Advanced",
    typing: "Static",
    sourceFile: "historical-languages.js"
  },
  {
    name: "PL/M",
    year: 1972,
    creator: "Gary Kildall",
    code: "HELLO: PROCEDURE OPTIONS(MAIN);\n  DO;\n    CALL WRITELN('Hello, World!');\n  END;",
    desc: "PL/M is a high-level language for microcomputers, used for early Intel development.",
    popularity: 2,
    categories: ["Historical", "Systems"],
    primaryCategory: "Historical",
    paradigms: ["Procedural"],
    domains: ["Systems"],
    difficulty: "Advanced",
    typing: "Static",
    sourceFile: "historical-languages.js"
  },
  {
    name: "MUMPS",
    year: 1966,
    creator: "Neil Pappalardo",
    code: "WRITE \"Hello, World!\"\nQUIT",
    desc: "MUMPS is a language designed for the healthcare industry, known for its integrated database.",
    popularity: 4,
    categories: ["Database", "Historical"],
    primaryCategory: "Database",
    paradigms: ["Procedural"],
    domains: ["Healthcare", "Database"],
    difficulty: "Intermediate",
    typing: "Dynamic",
    sourceFile: "database-languages.js"
  },
  {
    name: "Icon",
    year: 1977,
    creator: "Ralph Griswold",
    code: "procedure main()\n    write(\"Hello, World!\")\nend",
    desc: "Icon is a high-level, general-purpose programming language with goal-directed evaluation.",
    popularity: 5,
    categories: ["General Purpose"],
    primaryCategory: "General Purpose",
    paradigms: ["Procedural"],
    domains: ["General Purpose"],
    difficulty: "Intermediate",
    typing: "Dynamic",
    sourceFile: "general-languages.js"
  },
  {
    name: "JOVIAL",
    year: 1959,
    creator: "Jules Schwartz",
    code: "BEGIN\n  PRINT('Hello, World!');\nEND;",
    desc: "JOVIAL is a high-level language used by the US military for embedded systems.",
    popularity: 2,
    categories: ["Embedded", "Historical"],
    primaryCategory: "Embedded",
    paradigms: ["Procedural"],
    domains: ["Embedded"],
    difficulty: "Advanced",
    typing: "Static",
    sourceFile: "embedded-languages.js"
  },
  {
    name: "REXX",
    year: 1979,
    creator: "Mike Cowlishaw",
    code: "say \"Hello, World!\"",
    desc: "REXX is an interpreted programming language developed at IBM for ease of learning and reading.",
    popularity: 6,
    categories: ["Scripting"],
    primaryCategory: "Scripting",
    paradigms: ["Procedural"],
    domains: ["Scripting"],
    difficulty: "Beginner",
    typing: "Dynamic",
    sourceFile: "scripting-languages.js"
  },
  {
    name: "QBasic",
    year: 1991,
    creator: "Microsoft",
    code: "PRINT \"Hello, World!\"",
    desc: "QBasic is an IDE and interpreter for a variant of the BASIC programming language.",
    popularity: 8,
    categories: ["Educational"],
    primaryCategory: "Educational",
    paradigms: ["Procedural"],
    domains: ["Education"],
    difficulty: "Beginner",
    typing: "Dynamic",
    sourceFile: "educational-languages.js"
  },
  {
    name: "Turing",
    year: 1982,
    creator: "Ric Holt, James Cordy",
    code: "put \"Hello, World!\"",
    desc: "Turing is a Pascal-like language developed in Canada for teaching programming.",
    popularity: 5,
    categories: ["Educational"],
    primaryCategory: "Educational",
    paradigms: ["Procedural"],
    domains: ["Education"],
    difficulty: "Beginner",
    typing: "Static",
    sourceFile: "educational-languages.js"
  },
  {
    name: "Squirrel",
    year: 2003,
    creator: "Alberto Demichelis",
    code: "print(\"Hello, World!\");",
    desc: "Squirrel is a high-level imperative, object-oriented programming language, designed as a lightweight scripting language.",
    popularity: 4,
    categories: ["Scripting"],
    primaryCategory: "Scripting",
    paradigms: ["Object-Oriented"],
    domains: ["Scripting"],
    difficulty: "Intermediate",
    typing: "Dynamic",
    sourceFile: "scripting-languages.js"
  },
  {
    name: "Seed7",
    year: 2005,
    creator: "Thomas Mertes",
    code: "writeln(\"Hello, World!\");",
    desc: "Seed7 is a general-purpose programming language designed to be extensible.",
    popularity: 2,
    categories: ["General Purpose"],
    primaryCategory: "General Purpose",
    paradigms: ["Multi-paradigm"],
    domains: ["General Purpose"],
    difficulty: "Intermediate",
    typing: "Static",
    sourceFile: "general-languages.js"
  },
  {
    name: "SNOBOL",
    year: 1962,
    creator: "Ralph Griswold",
    code: "OUTPUT = \"Hello, World!\"\nEND",
    desc: "SNOBOL is a series of programming languages developed for string manipulation.",
    popularity: 3,
    categories: ["String Processing", "Historical"],
    primaryCategory: "String Processing",
    paradigms: ["Procedural"],
    domains: ["Text Processing"],
    difficulty: "Intermediate",
    typing: "Dynamic",
    sourceFile: "string-languages.js"
  },
  {
    name: "ChucK",
    year: 2003,
    creator: "Ge Wang, Perry Cook",
    code: "<<<\"Hello, World!\">>>;",
    desc: "ChucK is a strongly-timed, concurrent, and on-the-fly music programming language.",
    popularity: 2,
    categories: ["Music", "Concurrent"],
    primaryCategory: "Music",
    paradigms: ["Concurrent"],
    domains: ["Music"],
    difficulty: "Intermediate",
    typing: "Dynamic",
    sourceFile: "music-languages.js"
  },
  {
    name: "LOOP",
    year: 1967,
    creator: "Peter Landin",
    code: "LOOP 1 DO\n  PRINT \"Hello, World!\"\nEND",
    desc: "LOOP is a simple language used in theoretical computer science to study computability.",
    popularity: 1,
    categories: ["Theoretical"],
    primaryCategory: "Theoretical",
    paradigms: ["Procedural"],
    domains: ["Theory"],
    difficulty: "Advanced",
    typing: "Untyped",
    sourceFile: "theoretical-languages.js"
  },
  {
    name: "Whitespace",
    year: 2003,
    creator: "Edwin Brady, Chris Morris",
    code: "   \t  \t   \n   \t \t\t  \n   \t \t\t \t\n   \t \t\t\t \n   \t \t \t  \n   \t     \t\n   \t   \t\t \n   \t \t\t\t\t\n   \t \t\t\t \n   \t \t\t  \n   \t\t  \t \n\t\n  \n\n\n",
    desc: "Whitespace is an esoteric programming language that uses only whitespace characters.",
    popularity: 2,
    categories: ["Esoteric"],
    primaryCategory: "Esoteric",
    paradigms: ["Esoteric"],
    domains: ["Fun"],
    difficulty: "Advanced",
    typing: "Untyped",
    sourceFile: "esoteric-languages.js"
  },
  {
    name: "Befunge-98",
    year: 1998,
    creator: "Chris Pressey",
    code: ">25*\"Hello, World!\"@",
    desc: "Befunge-98 is a two-dimensional esoteric programming language, an extension of Befunge.",
    popularity: 2,
    categories: ["Esoteric"],
    primaryCategory: "Esoteric",
    paradigms: ["Esoteric"],
    domains: ["Fun"],
    difficulty: "Advanced",
    typing: "Untyped",
    sourceFile: "esoteric-languages.js"
  },
  {
    name: "Falcon",
    year: 2003,
    creator: "Giancarlo Niccolai",
    code: "printl(\"Hello, World!\\n\");",
    desc: "Falcon is a lightweight, fast, and feature-rich programming language.",
    popularity: 2,
    categories: ["Scripting"],
    primaryCategory: "Scripting",
    paradigms: ["Multi-paradigm"],
    domains: ["Scripting"],
    difficulty: "Intermediate",
    typing: "Dynamic",
    sourceFile: "scripting-languages.js"
  },
  {
    name: "Euphoria",
    year: 1993,
    creator: "Robert Craig",
    code: "puts(1, \"Hello, World!\\n\")",
    desc: "Euphoria is a simple, flexible, and easy-to-learn programming language.",
    popularity: 2,
    categories: ["General Purpose"],
    primaryCategory: "General Purpose",
    paradigms: ["Procedural"],
    domains: ["General Purpose"],
    difficulty: "Beginner",
    typing: "Dynamic",
    sourceFile: "general-languages.js"
  }
];

// Read the current languages.js file
let content = fs.readFileSync('js/languages.js', 'utf8');

// Find the insertion point (before the export)
const insertPoint = content.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('Could not find languages array in js/languages.js');
  process.exit(1);
}

// Prepare new entries as JS objects
const newEntries = newLanguages.map(lang => ',\n' + JSON.stringify(lang, null, 4)).join('');

// Insert new entries before the closing ];
const updated = content.slice(0, insertPoint) + newEntries + '\n];' + content.slice(insertPoint + 2);

fs.writeFileSync('js/languages.js', updated);
console.log('✅ Added', newLanguages.length, 'new languages!'); 