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

// New ultra-obscure, recent, or experimental general-purpose languages
const newLanguages = [
    {
        "name": "ALGOL W",
        "year": 1966,
        "creator": "Niklaus Wirth",
        "code": "begin\n  write(\"Hello, World!\")\nend",
        "desc": "ALGOL W is a programming language designed by Niklaus Wirth as a successor to ALGOL 60. It was the precursor to Pascal and introduced several important concepts.",
        "popularity": 3,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "PL/I",
        "year": 1964,
        "creator": "IBM",
        "code": "HELLO: PROCEDURE;\n   PUT SKIP LIST('Hello, World!');\nEND HELLO;",
        "desc": "PL/I (Programming Language One) is a procedural, imperative computer programming language designed for scientific, engineering, business and system programming.",
        "popularity": 8,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Modula-3",
        "year": 1988,
        "creator": "DEC",
        "code": "MODULE Hello EXPORTS Main;\nIMPORT IO;\nBEGIN\n  IO.Put(\"Hello, World!\\n\")\nEND Hello.",
        "desc": "Modula-3 is a programming language conceived as a successor to Modula-2. It was designed by Digital Equipment Corporation and Olivetti.",
        "popularity": 5,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Oberon-2",
        "year": 1991,
        "creator": "Niklaus Wirth",
        "code": "MODULE Hello;\nIMPORT Out;\nBEGIN\n  Out.String(\"Hello, World!\");\n  Out.Ln\nEND Hello.",
        "desc": "Oberon-2 is an extension of the original Oberon programming language that adds object-oriented programming features.",
        "popularity": 4,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Component Pascal",
        "year": 1997,
        "creator": "Oberon microsystems",
        "code": "MODULE Hello;\nIMPORT Out;\nBEGIN\n  Out.String(\"Hello, World!\");\n  Out.Ln\nEND Hello.",
        "desc": "Component Pascal is a programming language in the tradition of Pascal and Modula-2, but with support for component-based software development.",
        "popularity": 3,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "FreeBASIC",
        "year": 2004,
        "creator": "Andre Victor",
        "code": "PRINT \"Hello, World!\"",
        "desc": "FreeBASIC is a multiplatform, free/open source BASIC compiler, with syntax similar to QuickBASIC.",
        "popularity": 12,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "QB64",
        "year": 2007,
        "creator": "Galleon",
        "code": "PRINT \"Hello, World!\"",
        "desc": "QB64 is a modern BASIC programming language that maintains compatibility with QBasic while adding new features.",
        "popularity": 8,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Ring",
        "year": 2016,
        "creator": "Mahmoud Samir Fayed",
        "code": "see \"Hello, World!\" + nl",
        "desc": "Ring is a dynamic, general-purpose programming language designed to be simple and small, with a focus on productivity and flexibility.",
        "popularity": 6,
        "categories": [
            "Emerging",
            "Modern"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "Harbour",
        "year": 1999,
        "creator": "Antonio Linares",
        "code": "? \"Hello, World!\"",
        "desc": "Harbour is a free software compiler for the xBase superset language, often referred to as Clipper.",
        "popularity": 4,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Pike",
        "year": 1994,
        "creator": "Fredrik Hübinette",
        "code": "int main() {\n  write(\"Hello, World!\\n\");\n  return 0;\n}",
        "desc": "Pike is a dynamic programming language with a syntax similar to C. It features a built-in garbage collector and supports multiple programming paradigms.",
        "popularity": 3,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "ATS",
        "year": 2004,
        "creator": "Hongwei Xi",
        "code": "implement main0 () = println! (\"Hello, World!\")",
        "desc": "ATS (Applied Type System) is a programming language designed to unify specification and implementation. It uses a type system to ensure program correctness.",
        "popularity": 2,
        "categories": [
            "Academic",
            "Research"
        ],
        "primaryCategory": "Academic",
        "paradigms": [
            "Functional"
        ],
        "domains": [
            "Research",
            "Formal Methods"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "Chapel",
        "year": 2009,
        "creator": "Cray Inc.",
        "code": "writeln(\"Hello, World!\");",
        "desc": "Chapel is a parallel programming language designed to be productive for both single-locale and multi-locale programming.",
        "popularity": 8,
        "categories": [
            "Academic",
            "Research"
        ],
        "primaryCategory": "Academic",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Research",
            "High Performance Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "Vale",
        "year": 2020,
        "creator": "Evan Ovadia",
        "code": "fn main() {\n  println(\"Hello, World!\");\n}",
        "desc": "Vale is a memory-safe programming language that aims to provide the performance of C++ with the safety of Rust.",
        "popularity": 15,
        "categories": [
            "Systems",
            "Low-level"
        ],
        "primaryCategory": "Systems",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Programming",
            "Operating Systems"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Fantom",
        "year": 2008,
        "creator": "Brian Frank",
        "code": "class Hello {\n  static Void main() {\n    echo(\"Hello, World!\")\n  }\n}",
        "desc": "Fantom is an object-oriented programming language that runs on the JVM, .NET, and JavaScript.",
        "popularity": 5,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "Monkey X",
        "year": 2011,
        "creator": "Mark Sibly",
        "code": "Function Main:Int()\n  Print \"Hello, World!\"\n  Return 0\nEnd",
        "desc": "Monkey X is a high-level programming language designed for cross-platform game development.",
        "popularity": 4,
        "categories": [
            "Game Development"
        ],
        "primaryCategory": "Game Development",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Game Development",
            "Graphics"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "Ceylon",
        "year": 2011,
        "creator": "Red Hat",
        "code": "void hello() {\n    print(\"Hello, World!\");\n}",
        "desc": "Ceylon is a programming language designed by Red Hat. It was designed to be a better Java, with a focus on readability and modularity.",
        "popularity": 6,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "X10",
        "year": 2004,
        "creator": "IBM",
        "code": "public class Hello {\n  public static def main(args:Rail[String]) {\n    x10.io.Console.OUT.println(\"Hello, World!\");\n  }\n}",
        "desc": "X10 is a programming language designed for high-performance, scalable computing, developed by IBM.",
        "popularity": 3,
        "categories": [
            "Academic",
            "Research"
        ],
        "primaryCategory": "Academic",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Research",
            "High Performance Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "Fortress",
        "year": 2006,
        "creator": "Sun Microsystems",
        "code": "component HelloWorld\nexports Executable\nrun() = println(\"Hello, World!\")",
        "desc": "Fortress was a programming language designed by Sun Microsystems for high-performance computing.",
        "popularity": 2,
        "categories": [
            "Academic",
            "Research"
        ],
        "primaryCategory": "Academic",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Research",
            "High Performance Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "Xojo",
        "year": 1998,
        "creator": "Geoff Perlman",
        "code": "Sub Main()\n  MsgBox \"Hello, World!\"\nEnd Sub",
        "desc": "Xojo is a cross-platform development tool for creating desktop, web, and mobile applications.",
        "popularity": 8,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "Genie",
        "year": 2008,
        "creator": "Jamie McCracken",
        "code": "init\n  print \"Hello, World!\"",
        "desc": "Genie is a modern, general-purpose high-level programming language in the tradition of Python and Boo.",
        "popularity": 3,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "additional-languages.js"
    }
];

// Add new languages to the array
languagesArray.push(...newLanguages);

// Create the updated content
const updatedContent = content.replace(
    /var languages = (\[[\s\S]*?\]);/,
    `var languages = ${JSON.stringify(languagesArray, null, 2)};`
);

// Write the updated content back to the file
fs.writeFileSync(languagesFile, updatedContent);

console.log(`Added ${newLanguages.length} new ultra-obscure, recent, or experimental general-purpose languages:`);
newLanguages.forEach(lang => {
    console.log(`- ${lang.name} (${lang.year})`);
});

console.log(`\nTotal languages in collection: ${languagesArray.length}`); 