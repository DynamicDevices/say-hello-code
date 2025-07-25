/*
Say Hello Code - Programming Languages Collection
Copyright (c) 2025 Dynamic Devices Ltd

This work is licensed under the Creative Commons Attribution 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license,
  and indicate if changes were made.

Created by Dynamic Devices Ltd in collaboration with Claude.ai
Website: https://sayhellocode.com
*/

// Programming languages data for Say Hello Code
// Generated: 2025-01-27T12:00:00.000Z

var languages = [
    {
        "name": "ActionScript",
        "year": 1998,
        "creator": "Gary Grossman",
        "code": "trace(\"Hello, World!\");",
        "desc": "ActionScript is a programming language created in 1998 by Gary Grossman. It was designed for game development and is known for its Object-Oriented paradigm(s). ActionScript has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Game Development, Graphics.",
        "popularity": 20,
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
        "typing": "Mixed",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "Ada",
        "year": 1980,
        "creator": "Jean Ichbiah",
        "code": "with Ada.Text_IO;\nprocedure Hello is\nbegin\n   Ada.Text_IO.Put_Line(\"Hello, World!\");\nend Hello;",
        "desc": "Ada is a programming language created in 1980 by Jean Ichbiah. It was designed for legacy and is known for its Object-Oriented paradigm(s). Ada has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 15,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Agda",
        "year": 2007,
        "creator": "Ulf Norell",
        "code": "module Hello where\n\nopen import IO\n\nmain = run (putStrLn \"Hello, World!\")",
        "desc": "Agda is a programming language created in 2007 by Ulf Norell. It was designed for academic and is known for its Functional paradigm(s). Agda has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Formal Methods.",
        "popularity": 10,
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
        "typing": "Mixed",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "ALGOL",
        "year": 1958,
        "creator": "Committee",
        "code": "begin\n  print((\"Hello, World!\"))\nend",
        "desc": "ALGOL is a programming language created in 1958 by Committee. It was designed for legacy and is known for its Multi-paradigm paradigm(s). ALGOL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 10,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Angular",
        "year": 2010,
        "creator": "Google",
        "code": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-hello',\n  template: '<h1>Hello, World!</h1>'\n})\nexport class HelloComponent { }",
        "desc": "Angular is a programming language created in 2010 by Google. It was designed for web and is known for its Multi-paradigm paradigm(s). Angular has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 68,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Ansible",
        "year": 2012,
        "creator": "Michael DeHaan",
        "code": "---\n- name: Hello World\n  debug:\n    msg: \"Hello, World!\"",
        "desc": "Ansible is a programming language created in 2012 by Michael DeHaan. It was designed for configuration and is known for its Multi-paradigm paradigm(s). Ansible has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 42,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "AsciiDoc",
        "year": 2002,
        "creator": "Stuart Rackham",
        "code": "= Hello, World!\n\nThis is a *Hello, World!* example in AsciiDoc.",
        "desc": "AsciiDoc is a programming language created in 2002 by Stuart Rackham. It was designed for markup and is known for its Multi-paradigm paradigm(s). AsciiDoc has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Documentation, Web.",
        "popularity": 20,
        "categories": [
            "Markup",
            "Documentation"
        ],
        "primaryCategory": "Markup",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Documentation",
            "Web"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "markup-languages.js"
    },
    {
        "name": "Assembly x86",
        "year": 1947,
        "creator": "Kathleen Booth",
        "code": ".section .data\n    hello: .ascii \"Hello, World!\\n\"\n.section .text\n    .global _start\n_start:\n    mov $4, %eax\n    mov $1, %ebx\n    mov $hello, %ecx\n    int $0x80",
        "desc": "Assembly x86 is a programming language created in 1947 by Kathleen Booth. It was designed for systems and is known for its Multi-paradigm paradigm(s). Assembly x86 has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 45,
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
        "typing": "Mixed",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "AWK",
        "year": 1977,
        "creator": "Alfred Aho",
        "code": "BEGIN { print \"Hello, World!\" }",
        "desc": "AWK is a programming language created in 1977 by Alfred Aho. It was designed for specialized and is known for its Multi-paradigm paradigm(s). AWK has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 35,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "B",
        "year": 1969,
        "creator": "Ken Thompson",
        "code": "main() {\n  printf(\"Hello, World!\");\n}",
        "desc": "B is a programming language created in 1969 by Ken Thompson. It was designed for vintage and is known for its Multi-paradigm paradigm(s). B has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 1,
        "categories": [
            "Vintage",
            "Historical"
        ],
        "primaryCategory": "Vintage",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "vintage-languages.js"
    },
    {
        "name": "Bash",
        "year": 1989,
        "creator": "Brian Fox",
        "code": "#!/bin/bash\necho \"Hello, World!\"",
        "desc": "Bash is a programming language created in 1989 by Brian Fox. It was designed for popular and is known for its Multi-paradigm paradigm(s). Bash has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 75,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Mixed",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "BASIC",
        "year": 1964,
        "creator": "John Kemeny",
        "code": "10 PRINT \"Hello, World!\"\n20 END",
        "desc": "BASIC is a programming language created in 1964 by John Kemeny. It was designed for legacy and is known for its Multi-paradigm paradigm(s). BASIC has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 30,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "BCPL",
        "year": 1966,
        "creator": "Martin Richards",
        "code": "GET \"LIBHDR\"\n\nLET START() BE\n$( WRITES(\"Hello, World!*N\")\n$)",
        "desc": "BCPL is a programming language created in 1966 by Martin Richards. It was designed for vintage and is known for its Procedural paradigm(s). BCPL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 2,
        "categories": [
            "Vintage",
            "Historical"
        ],
        "primaryCategory": "Vintage",
        "paradigms": [
            "Procedural"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "vintage-languages.js"
    },
    {
        "name": "Befunge",
        "year": 1993,
        "creator": "Chris Pressey",
        "code": ">25*\"Hello, World!\"@",
        "desc": "Befunge is a programming language created in 1993 by Chris Pressey. It was designed for esoteric and is known for its Esoteric paradigm(s). Befunge has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Fun.",
        "popularity": 5,
        "categories": [
            "Esoteric"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Esoteric"
        ],
        "domains": [
            "Education",
            "Fun"
        ],
        "difficulty": "Advanced",
        "typing": "Untyped",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "Brainfuck",
        "year": 1993,
        "creator": "Urban Müller",
        "code": "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.",
        "desc": "Brainfuck is a programming language created in 1993 by Urban Müller. It was designed for esoteric and is known for its Multi-paradigm paradigm(s). Brainfuck has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 15,
        "categories": [
            "Esoteric",
            "Educational"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "C",
        "year": 1972,
        "creator": "Dennis Ritchie",
        "code": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
        "desc": "C is a programming language created in 1972 by Dennis Ritchie. It was designed for popular and is known for its Procedural, Imperative paradigm(s). C has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 85,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Procedural",
            "Imperative"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "C#",
        "year": 2000,
        "creator": "Anders Hejlsberg",
        "code": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}",
        "desc": "C# is a programming language created in 2000 by Anders Hejlsberg. It was designed for popular and is known for its Object-Oriented paradigm(s). C# has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 90,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "C++",
        "year": 1985,
        "creator": "Bjarne Stroustrup",
        "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}",
        "desc": "C++ is a programming language created in 1985 by Bjarne Stroustrup. It was designed for popular and is known for its Object-Oriented, Imperative paradigm(s). C++ has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 87,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Object-Oriented",
            "Imperative"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Carbon",
        "year": 2022,
        "creator": "Google",
        "code": "package Sample api;\n\nfn Main() -> i32 {\n    Print(\"Hello, World!\");\n    return 0;\n}",
        "desc": "Carbon is a programming language created in 2022 by Google. It was designed for systems and is known for its Multi-paradigm paradigm(s). Carbon has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 30,
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
        "typing": "Mixed",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Cat",
        "year": 2006,
        "creator": "Christopher Diggins",
        "code": "\"Hello, World!\" writeln",
        "desc": "Cat is a programming language created in 2006 by Christopher Diggins. It was designed for additional and is known for its Functional paradigm(s). Cat has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 2,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "Chef",
        "year": 2009,
        "creator": "Adam Jacob",
        "code": "log \"Hello, World!\"",
        "desc": "Chef is a programming language created in 2009 by Adam Jacob. It was designed for configuration and is known for its Multi-paradigm paradigm(s). Chef has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 20,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "Clean",
        "year": 1987,
        "creator": "Rinus Plasmeijer",
        "code": "module hello\n\nimport StdEnv\n\nStart = \"Hello, World!\"",
        "desc": "Clean is a programming language created in 1987 by Rinus Plasmeijer. It was designed for functional and is known for its Functional paradigm(s). Clean has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 6,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Clojure",
        "year": 2007,
        "creator": "Rich Hickey",
        "code": "(println \"Hello, World!\")",
        "desc": "Clojure is a programming language created in 2007 by Rich Hickey. It was designed for functional and is known for its Functional paradigm(s). Clojure has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 45,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Dynamic",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "CMake",
        "year": 2000,
        "creator": "Bill Hoffman",
        "code": "cmake_minimum_required(VERSION 3.0)\nproject(HelloWorld)\nmessage(\"Hello, World!\")",
        "desc": "CMake is a programming language created in 2000 by Bill Hoffman. It was designed for configuration and is known for its Multi-paradigm paradigm(s). CMake has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 35,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "COBOL",
        "year": 1959,
        "creator": "Grace Hopper",
        "code": "IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO-WORLD.\nPROCEDURE DIVISION.\nDISPLAY 'Hello, World!'.\nSTOP RUN.",
        "desc": "COBOL is a programming language created in 1959 by Grace Hopper. It was designed for legacy and is known for its Procedural paradigm(s). COBOL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 25,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "CoffeeScript",
        "year": 2009,
        "creator": "Jeremy Ashkenas",
        "code": "console.log \"Hello, World!\"",
        "desc": "CoffeeScript is a programming language created in 2009 by Jeremy Ashkenas. It was designed for web and is known for its Multi-paradigm paradigm(s). CoffeeScript has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 25,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Coq",
        "year": 1989,
        "creator": "Thierry Coquand",
        "code": "Require Import Coq.Strings.String.\nOpen Scope string_scope.\nDefinition hello := \"Hello, World!\".",
        "desc": "Coq is a programming language created in 1989 by Thierry Coquand. It was designed for academic and is known for its Multi-paradigm paradigm(s). Coq has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Formal Methods.",
        "popularity": 15,
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
            "Formal Methods"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "Creole",
        "year": 2007,
        "creator": "Wiki Community",
        "code": "= Hello, World! =\n\nThis is a **Hello, World!** example in Creole.",
        "desc": "Creole is a programming language created in 2007 by Wiki Community. It was designed for markup and is known for its Multi-paradigm paradigm(s). Creole has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Documentation, Web.",
        "popularity": 6,
        "categories": [
            "Markup",
            "Documentation"
        ],
        "primaryCategory": "Markup",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Documentation",
            "Web"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "markup-languages.js"
    },
    {
        "name": "Crystal",
        "year": 2014,
        "creator": "Ary Borenszweig",
        "code": "puts \"Hello, World!\"",
        "desc": "Crystal is a programming language created in 2014 by Ary Borenszweig. It was designed for systems and is known for its Object-Oriented paradigm(s). Crystal has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 18,
        "categories": [
            "Systems",
            "Low-level"
        ],
        "primaryCategory": "Systems",
        "paradigms": [
            "Object-Oriented"
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
        "name": "Csh",
        "year": 1978,
        "creator": "Bill Joy",
        "code": "#!/bin/csh\necho \"Hello, World!\"",
        "desc": "Csh is a programming language created in 1978 by Bill Joy. It was designed for shell and is known for its Multi-paradigm paradigm(s). Csh has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Automation.",
        "popularity": 12,
        "categories": [
            "Shell",
            "Command Line"
        ],
        "primaryCategory": "Shell",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Administration",
            "Automation"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "shell-languages.js"
    },
    {
        "name": "CSS",
        "year": 1996,
        "creator": "Håkon Lie",
        "code": "body::before {\n    content: \"Hello, World!\";\n    font-size: 2em;\n    display: block;\n    text-align: center;\n}",
        "desc": "CSS is a programming language created in 1996 by Håkon Lie. It was designed for popular and is known for its Multi-paradigm paradigm(s). CSS has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 83,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Mixed",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Cypher",
        "year": 2011,
        "creator": "Neo4j",
        "code": "CREATE (hello:Message {text: \"Hello, World!\"})\nRETURN hello.text",
        "desc": "Cypher is a programming language created in 2011 by Neo4j. It was designed for data science and is known for its Multi-paradigm paradigm(s). Cypher has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Analysis, Statistics.",
        "popularity": 28,
        "categories": [
            "Data Science",
            "Analytics"
        ],
        "primaryCategory": "Data Science",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Analysis",
            "Statistics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "D",
        "year": 2001,
        "creator": "Walter Bright",
        "code": "import std.stdio;\n\nvoid main() {\n    writeln(\"Hello, World!\");\n}",
        "desc": "D is a programming language created in 2001 by Walter Bright. It was designed for systems and is known for its Multi-paradigm paradigm(s). D has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 20,
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
        "name": "Dart",
        "year": 2011,
        "creator": "Google",
        "code": "void main() {\n  print('Hello, World!');\n}",
        "desc": "Dart is a programming language created in 2011 by Google. It was designed for mobile and is known for its Multi-paradigm paradigm(s). Dart has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mobile Development.",
        "popularity": 55,
        "categories": [
            "Mobile"
        ],
        "primaryCategory": "Mobile",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Mobile Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "mobile-languages.js"
    },
    {
        "name": "Dash",
        "year": 1997,
        "creator": "Herbert Xu",
        "code": "#!/bin/dash\necho \"Hello, World!\"",
        "desc": "Dash is a programming language created in 1997 by Herbert Xu. It was designed for shell and is known for its Multi-paradigm paradigm(s). Dash has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Automation.",
        "popularity": 18,
        "categories": [
            "Shell",
            "Command Line"
        ],
        "primaryCategory": "Shell",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Administration",
            "Automation"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "shell-languages.js"
    },
    {
        "name": "Delphi",
        "year": 1995,
        "creator": "Borland",
        "code": "program HelloWorld;\nbegin\n  writeln('Hello, World!');\nend.",
        "desc": "Delphi is a programming language created in 1995 by Borland. It was designed for legacy and is known for its Multi-paradigm paradigm(s). Delphi has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 22,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Dockerfile",
        "year": 2013,
        "creator": "Solomon Hykes",
        "code": "FROM alpine:latest\nRUN echo \"Hello, World!\"",
        "desc": "Dockerfile is a programming language created in 2013 by Solomon Hykes. It was designed for configuration and is known for its Multi-paradigm paradigm(s). Dockerfile has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 50,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "Eiffel",
        "year": 1985,
        "creator": "Bertrand Meyer",
        "code": "class HELLO_WORLD\ncreate\n    make\nfeature\n    make\n        do\n            print(\"Hello, World!%N\")\n        end\nend",
        "desc": "Eiffel is a programming language created in 1985 by Bertrand Meyer. It was designed for object-oriented and is known for its Object-Oriented paradigm(s). Eiffel has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 8,
        "categories": [
            "Object-Oriented"
        ],
        "primaryCategory": "Object-Oriented",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "object-oriented-languages.js"
    },
    {
        "name": "Elixir",
        "year": 2011,
        "creator": "José Valim",
        "code": "IO.puts \"Hello, World!\"",
        "desc": "Elixir is a programming language created in 2011 by José Valim. It was designed for functional and is known for its Functional paradigm(s). Elixir has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 38,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Dynamic",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Elm",
        "year": 2012,
        "creator": "Evan Czaplicki",
        "code": "import Html exposing (text)\n\nmain =\n  text \"Hello, World!\"",
        "desc": "Elm is a programming language created in 2012 by Evan Czaplicki. It was designed for web and is known for its Multi-paradigm paradigm(s). Elm has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 20,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Erlang",
        "year": 1986,
        "creator": "Joe Armstrong",
        "code": "-module(hello).\n-export([start/0]).\n\nstart() ->\n    io:format(\"Hello, World!~n\").",
        "desc": "Erlang is a programming language created in 1986 by Joe Armstrong. It was designed for functional and is known for its Functional paradigm(s). Erlang has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 40,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Expect",
        "year": 1990,
        "creator": "Don Libes",
        "code": "#!/usr/bin/expect\nsend \"Hello, World!\\n\"",
        "desc": "Expect is a programming language created in 1990 by Don Libes. It was designed for scripting and is known for its Multi-paradigm paradigm(s). Expect has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Automation, System Administration.",
        "popularity": 15,
        "categories": [
            "Scripting",
            "Automation"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Automation",
            "System Administration"
        ],
        "difficulty": "Beginner to Intermediate",
        "typing": "Mixed",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "F#",
        "year": 2005,
        "creator": "Don Syme",
        "code": "printfn \"Hello, World!\"",
        "desc": "F# is a programming language created in 2005 by Don Syme. It was designed for functional and is known for its Functional paradigm(s). F# has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 42,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Factor",
        "year": 2003,
        "creator": "Slava Pestov",
        "code": "\"Hello, World!\" print",
        "desc": "Factor is a programming language created in 2003 by Slava Pestov. It was designed for additional and is known for its Multi-paradigm paradigm(s). Factor has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 5,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "Fennel",
        "year": 2016,
        "creator": "Phil Hagelberg",
        "code": "(print \"Hello, World!\")",
        "desc": "Fennel is a programming language created in 2016 by Phil Hagelberg. It was designed for functional and is known for its Multi-paradigm paradigm(s). Fennel has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 10,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Flutter",
        "year": 2017,
        "creator": "Google",
        "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        body: Center(\n          child: Text('Hello, World!'),\n        ),\n      ),\n    );\n  }\n}",
        "desc": "Flutter is a programming language created in 2017 by Google. It was designed for mobile and is known for its Multi-paradigm paradigm(s). Flutter has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mobile Development.",
        "popularity": 60,
        "categories": [
            "Mobile"
        ],
        "primaryCategory": "Mobile",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Mobile Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "mobile-languages.js"
    },
    {
        "name": "Fortran",
        "year": 1957,
        "creator": "John Backus",
        "code": "program hello\n    print *, 'Hello, World!'\nend program hello",
        "desc": "Fortran is a programming language created in 1957 by John Backus. It was designed for scientific and is known for its Multi-paradigm paradigm(s). Fortran has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing, Mathematics.",
        "popularity": 30,
        "categories": [
            "Numerical",
            "Scientific"
        ],
        "primaryCategory": "Scientific",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scientific Computing",
            "Mathematics"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "numerical-languages.js"
    },
    {
        "name": "GDScript",
        "year": 2014,
        "creator": "Juan Linietsky",
        "code": "extends Node\n\nfunc _ready():\n    print(\"Hello, World!\")",
        "desc": "GDScript is a programming language created in 2014 by Juan Linietsky. It was designed for game development and is known for its Multi-paradigm paradigm(s). GDScript has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Game Development, Graphics.",
        "popularity": 25,
        "categories": [
            "Game Development"
        ],
        "primaryCategory": "Game Development",
        "paradigms": [
            "Multi-paradigm"
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
        "name": "Gleam",
        "year": 2016,
        "creator": "Louis Pilfold",
        "code": "import gleam/io\n\npub fn main() {\n  io.println(\"Hello, World!\")\n}",
        "desc": "Gleam is a programming language created in 2016 by Louis Pilfold. It was designed for emerging and is known for its Multi-paradigm paradigm(s). Gleam has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 8,
        "categories": [
            "Emerging",
            "Modern"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "GLSL",
        "year": 2004,
        "creator": "OpenGL ARB",
        "code": "#version 330 core\nout vec4 FragColor;\nvoid main()\n{\n    FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Hello, World! in white\n}",
        "desc": "GLSL is a programming language created in 2004 by OpenGL ARB. It was designed for game development and is known for its Multi-paradigm paradigm(s). GLSL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Game Development, Graphics.",
        "popularity": 35,
        "categories": [
            "Game Development"
        ],
        "primaryCategory": "Game Development",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Game Development",
            "Graphics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "Gnuplot",
        "year": 1986,
        "creator": "Colin Kelley",
        "code": "set terminal dumb\nplot '-' with lines title \"Hello, World!\"\n0 0\n1 1\ne",
        "desc": "Gnuplot is a programming language created in 1986 by Colin Kelley. It was designed for specialized and is known for its Multi-paradigm paradigm(s). Gnuplot has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 20,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "Go",
        "year": 2009,
        "creator": "Google Team",
        "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}",
        "desc": "Go is a programming language created in 2009 by Google Team. It was designed for popular and is known for its Multi-paradigm paradigm(s). Go has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 82,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Gradle",
        "year": 2007,
        "creator": "Hans Dockter",
        "code": "task hello {\n    doLast {\n        println 'Hello, World!'\n    }\n}",
        "desc": "Gradle is a programming language created in 2007 by Hans Dockter. It was designed for configuration and is known for its Multi-paradigm paradigm(s). Gradle has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 45,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "Grain",
        "year": 2017,
        "creator": "Philip Blair",
        "code": "print(\"Hello, World!\")",
        "desc": "Grain is a programming language created in 2017 by Philip Blair. It was designed for emerging and is known for its Functional paradigm(s). Grain has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 4,
        "categories": [
            "Emerging",
            "Modern"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "GraphQL",
        "year": 2012,
        "creator": "Facebook",
        "code": "query {\n  hello\n}",
        "desc": "GraphQL is a programming language created in 2012 by Facebook. It was designed for data science and is known for its Multi-paradigm paradigm(s). GraphQL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Analysis, Statistics.",
        "popularity": 35,
        "categories": [
            "Data Science",
            "Analytics"
        ],
        "primaryCategory": "Data Science",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Analysis",
            "Statistics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "Groovy",
        "year": 2003,
        "creator": "James Strachan",
        "code": "println \"Hello, World!\"",
        "desc": "Groovy is a programming language created in 2003 by James Strachan. It was designed for object-oriented and is known for its Object-Oriented paradigm(s). Groovy has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 30,
        "categories": [
            "Object-Oriented"
        ],
        "primaryCategory": "Object-Oriented",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "object-oriented-languages.js"
    },
    {
        "name": "Haskell",
        "year": 1990,
        "creator": "Committee",
        "code": "main = putStrLn \"Hello, World!\"",
        "desc": "Haskell is a programming language created in 1990 by Committee. It was designed for functional and is known for its Functional paradigm(s). Haskell has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 48,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Static",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "HLSL",
        "year": 2002,
        "creator": "Microsoft",
        "code": "float4 main() : SV_Target\n{\n    return float4(1, 1, 1, 1); // Hello, World! in white\n}",
        "desc": "HLSL is a programming language created in 2002 by Microsoft. It was designed for game development and is known for its Multi-paradigm paradigm(s). HLSL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Game Development, Graphics.",
        "popularity": 30,
        "categories": [
            "Game Development"
        ],
        "primaryCategory": "Game Development",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Game Development",
            "Graphics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "HTML",
        "year": 1990,
        "creator": "Tim Berners-Lee",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>",
        "desc": "HTML is a programming language created in 1990 by Tim Berners-Lee. It was designed for popular and is known for its Multi-paradigm paradigm(s). HTML has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 85,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Mixed",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Hy",
        "year": 2013,
        "creator": "Paul Tagliamonte",
        "code": "(print \"Hello, World!\")",
        "desc": "Hy is a programming language created in 2013 by Paul Tagliamonte. It was designed for functional and is known for its Multi-paradigm paradigm(s). Hy has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 14,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Icon",
        "year": 1977,
        "creator": "Ralph Griswold",
        "code": "procedure main()\n    write(\"Hello, World!\")\nend",
        "desc": "Icon is a programming language created in 1977 by Ralph Griswold. It was designed for additional and is known for its Multi-paradigm paradigm(s). Icon has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 6,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "Idris",
        "year": 2007,
        "creator": "Edwin Brady",
        "code": "main : IO ()\nmain = putStrLn \"Hello, World!\"",
        "desc": "Idris is a programming language created in 2007 by Edwin Brady. It was designed for functional and is known for its Functional paradigm(s). Idris has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 18,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Inko",
        "year": 2015,
        "creator": "Yorick Peterse",
        "code": "import std.stdio (STDOUT)\n\nclass async Main {\n  fn async main {\n    STDOUT.new.print('Hello, World!')\n  }\n}",
        "desc": "Inko is a programming language created in 2015 by Yorick Peterse. It was designed for emerging and is known for its Multi-paradigm paradigm(s). Inko has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 3,
        "categories": [
            "Emerging",
            "Modern"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "Intercal",
        "year": 1972,
        "creator": "Don Woods",
        "code": "DO ,1 <- #13\nPLEASE DO ,1 SUB #1 <- #238\nDO ,1 SUB #2 <- #108\nDO ,1 SUB #3 <- #112\nDO ,1 SUB #4 <- #0\nDO ,1 SUB #5 <- #64\nDO ,1 SUB #6 <- #194\nDO ,1 SUB #7 <- #48\nPLEASE DO ,1 SUB #8 <- #22\nDO ,1 SUB #9 <- #248\nDO ,1 SUB #10 <- #168\nDO ,1 SUB #11 <- #24\nDO ,1 SUB #12 <- #16\nDO ,1 SUB #13 <- #162\nPLEASE READ OUT ,1\nPLEASE GIVE UP",
        "desc": "Intercal is a programming language created in 1972 by Don Woods. It was designed for esoteric and is known for its Multi-paradigm paradigm(s). Intercal has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 4,
        "categories": [
            "Esoteric",
            "Educational"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "Ionic",
        "year": 2013,
        "creator": "Drifty Co.",
        "code": "<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Hello, World!</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</ion-content>",
        "desc": "Ionic is a programming language created in 2013 by Drifty Co.. It was designed for mobile and is known for its Multi-paradigm paradigm(s). Ionic has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mobile Development.",
        "popularity": 40,
        "categories": [
            "Mobile"
        ],
        "primaryCategory": "Mobile",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Mobile Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "mobile-languages.js"
    },
    {
        "name": "Isabelle",
        "year": 1986,
        "creator": "Lawrence Paulson",
        "code": "theory Hello\nimports Main\nbegin\n\nvalue \"Hello, World!\"\n\nend",
        "desc": "Isabelle is a programming language created in 1986 by Lawrence Paulson. It was designed for academic and is known for its Multi-paradigm paradigm(s). Isabelle has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Formal Methods.",
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
            "Formal Methods"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "J",
        "year": 1990,
        "creator": "Kenneth Iverson",
        "code": "'Hello, World!'",
        "desc": "J is a programming language created in 1990 by Kenneth Iverson. It was designed for academic and is known for its Multi-paradigm paradigm(s). J has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Formal Methods.",
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
            "Formal Methods"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "JAI",
        "year": 2014,
        "creator": "Jonathan Blow",
        "code": "#import \"Basic\";\n\nmain :: () {\n    print(\"Hello, World!\\n\");\n}",
        "desc": "JAI is a programming language created in 2014 by Jonathan Blow. It was designed for systems and is known for its Multi-paradigm paradigm(s). JAI has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 16,
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
        "typing": "Mixed",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Java",
        "year": 1995,
        "creator": "James Gosling",
        "code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "desc": "Java is a programming language created in 1995 by James Gosling. It was designed for popular and is known for its Object-Oriented, Imperative paradigm(s). Java has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 95,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Object-Oriented",
            "Imperative"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "JavaScript",
        "year": 1995,
        "creator": "Brendan Eich",
        "code": "console.log(\"Hello, World!\");",
        "desc": "JavaScript is a programming language created in 1995 by Brendan Eich. It was designed for popular and is known for its Multi-paradigm paradigm(s). JavaScript has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 100,
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Joy",
        "year": 1999,
        "creator": "Manfred von Thun",
        "code": "\"Hello, World!\" putchars.",
        "desc": "Joy is a programming language created in 1999 by Manfred von Thun. It was designed for additional and is known for its Functional paradigm(s). Joy has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 3,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "JSON",
        "year": 2001,
        "creator": "Douglas Crockford",
        "code": "{\n  \"message\": \"Hello, World!\",\n  \"language\": \"JSON\"\n}",
        "desc": "JSON is a programming language created in 2001 by Douglas Crockford. It was designed for data science and is known for its Multi-paradigm paradigm(s). JSON has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Analysis, Statistics.",
        "popularity": 50,
        "categories": [
            "Data Science",
            "Analytics"
        ],
        "primaryCategory": "Data Science",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Analysis",
            "Statistics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "JSX",
        "year": 2013,
        "creator": "Facebook",
        "code": "const element = <h1>Hello, World!</h1>;",
        "desc": "JSX is a programming language created in 2013 by Facebook. It was designed for web and is known for its Multi-paradigm paradigm(s). JSX has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 75,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Julia",
        "year": 2012,
        "creator": "Jeff Bezanson",
        "code": "println(\"Hello, World!\")",
        "desc": "Julia is a programming language created in 2012 by Jeff Bezanson. It was designed for scientific and is known for its Multi-paradigm paradigm(s). Julia has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing, Mathematics.",
        "popularity": 35,
        "categories": [
            "Numerical",
            "Scientific"
        ],
        "primaryCategory": "Scientific",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scientific Computing",
            "Mathematics"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "numerical-languages.js"
    },
    {
        "name": "K",
        "year": 1993,
        "creator": "Arthur Whitney",
        "code": "\"Hello, World!\"",
        "desc": "K is a programming language created in 1993 by Arthur Whitney. It was designed for academic and is known for its Multi-paradigm paradigm(s). K has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Formal Methods.",
        "popularity": 5,
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
            "Formal Methods"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "Kitten",
        "year": 2011,
        "creator": "Jon Purdy",
        "code": "\"Hello, World!\" say",
        "desc": "Kitten is a programming language created in 2011 by Jon Purdy. It was designed for additional and is known for its Functional paradigm(s). Kitten has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 1,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Static",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "Koka",
        "year": 2012,
        "creator": "Daan Leijen",
        "code": "fun main()\n  println(\"Hello, World!\")",
        "desc": "Koka is a programming language created in 2012 by Daan Leijen. It was designed for emerging and is known for its Functional paradigm(s). Koka has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 5,
        "categories": [
            "Emerging",
            "Modern"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "Kotlin",
        "year": 2011,
        "creator": "JetBrains",
        "code": "fun main() {\n    println(\"Hello, World!\")\n}",
        "desc": "Kotlin is a programming language created in 2011 by JetBrains. It was designed for popular and is known for its Object-Oriented paradigm(s). Kotlin has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 76,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Ksh",
        "year": 1983,
        "creator": "David Korn",
        "code": "#!/bin/ksh\necho \"Hello, World!\"",
        "desc": "Ksh is a programming language created in 1983 by David Korn. It was designed for shell and is known for its Multi-paradigm paradigm(s). Ksh has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Automation.",
        "popularity": 20,
        "categories": [
            "Shell",
            "Command Line"
        ],
        "primaryCategory": "Shell",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Administration",
            "Automation"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "shell-languages.js"
    },
    {
        "name": "LaTeX",
        "year": 1985,
        "creator": "Leslie Lamport",
        "code": "\\documentclass{article}\n\\begin{document}\nHello, World!\n\\end{document}",
        "desc": "LaTeX is a programming language created in 1985 by Leslie Lamport. It was designed for markup and is known for its Multi-paradigm paradigm(s). LaTeX has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Documentation, Web.",
        "popularity": 45,
        "categories": [
            "Markup",
            "Documentation"
        ],
        "primaryCategory": "Markup",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Documentation",
            "Web"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "markup-languages.js"
    },
    {
        "name": "Lean",
        "year": 2013,
        "creator": "Leonardo de Moura",
        "code": "#eval \"Hello, World!\"",
        "desc": "Lean is a programming language created in 2013 by Leonardo de Moura. It was designed for academic and is known for its Multi-paradigm paradigm(s). Lean has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Formal Methods.",
        "popularity": 18,
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
            "Formal Methods"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "LESS",
        "year": 2009,
        "creator": "Alexis Sellier",
        "code": "@message: \"Hello, World!\";\n\nbody::before {\n  content: @message;\n  font-size: 2em;\n  display: block;\n  text-align: center;\n}",
        "desc": "LESS is a programming language created in 2009 by Alexis Sellier. It was designed for web and is known for its Multi-paradigm paradigm(s). LESS has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 40,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Dynamic",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Lisp",
        "year": 1958,
        "creator": "John McCarthy",
        "code": "(format t \"Hello, World!~%\")",
        "desc": "Lisp is a programming language created in 1958 by John McCarthy. It was designed for functional and is known for its Functional paradigm(s). Lisp has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 25,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Logo",
        "year": 1967,
        "creator": "Wally Feurzeig",
        "code": "to hello\n  print [Hello, World!]\nend\nhello",
        "desc": "Logo is a programming language created in 1967 by Wally Feurzeig. It was designed for legacy and is known for its Multi-paradigm paradigm(s). Logo has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 18,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "LOLCODE",
        "year": 2007,
        "creator": "Adam Lindsay",
        "code": "HAI 1.2\nCAN HAS STDIO?\nVISIBLE \"Hello, World!\"\nKTHXBYE",
        "desc": "LOLCODE is a programming language created in 2007 by Adam Lindsay. It was designed for esoteric and is known for its Multi-paradigm paradigm(s). LOLCODE has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 12,
        "categories": [
            "Esoteric",
            "Educational"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "Lua",
        "year": 1993,
        "creator": "Roberto Ierusalimschy",
        "code": "print(\"Hello, World!\")",
        "desc": "Lua is a programming language created in 1993 by Roberto Ierusalimschy. It was designed for game development and is known for its Multi-paradigm paradigm(s). Lua has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Game Development, Graphics.",
        "popularity": 50,
        "categories": [
            "Game Development"
        ],
        "primaryCategory": "Game Development",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Game Development",
            "Graphics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "Makefile",
        "year": 1976,
        "creator": "Stuart Feldman",
        "code": "hello:\n\t@echo \"Hello, World!\"",
        "desc": "Makefile is a programming language created in 1976 by Stuart Feldman. It was designed for configuration and is known for its Multi-paradigm paradigm(s). Makefile has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 40,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "Malbolge",
        "year": 1998,
        "creator": "Ben Olmstead",
        "code": "(=<`#9]~6ZY32Vx/4Rs+0No-&Jk)\"Fh}|Bcy?`=*z]Kw%oG4UUS0/@-ejc(:'8dc",
        "desc": "Malbolge is a programming language created in 1998 by Ben Olmstead. It was designed for esoteric and is known for its Multi-paradigm paradigm(s). Malbolge has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 3,
        "categories": [
            "Esoteric",
            "Educational"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "Maple",
        "year": 1982,
        "creator": "Waterloo Maple",
        "code": "printf(\"Hello, World!\\n\");",
        "desc": "Maple is a programming language created in 1982 by Waterloo Maple. It was designed for scientific and is known for its Multi-paradigm paradigm(s). Maple has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing, Mathematics.",
        "popularity": 20,
        "categories": [
            "Numerical",
            "Scientific"
        ],
        "primaryCategory": "Scientific",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scientific Computing",
            "Mathematics"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "numerical-languages.js"
    },
    {
        "name": "Markdown",
        "year": 2004,
        "creator": "John Gruber",
        "code": "# Hello, World!\n\nThis is a **Hello, World!** example in Markdown.",
        "desc": "Markdown is a programming language created in 2004 by John Gruber. It was designed for markup and is known for its Multi-paradigm paradigm(s). Markdown has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Documentation, Web.",
        "popularity": 70,
        "categories": [
            "Markup",
            "Documentation"
        ],
        "primaryCategory": "Markup",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Documentation",
            "Web"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "markup-languages.js"
    },
    {
        "name": "Mathematica",
        "year": 1988,
        "creator": "Stephen Wolfram",
        "code": "Print[\"Hello, World!\"]",
        "desc": "Mathematica is a programming language created in 1988 by Stephen Wolfram. It was designed for scientific and is known for its Multi-paradigm paradigm(s). Mathematica has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing, Mathematics.",
        "popularity": 40,
        "categories": [
            "Numerical",
            "Scientific"
        ],
        "primaryCategory": "Scientific",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scientific Computing",
            "Mathematics"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "numerical-languages.js"
    },
    {
        "name": "MATLAB",
        "year": 1984,
        "creator": "Cleve Moler",
        "code": "disp('Hello, World!')",
        "desc": "MATLAB is a programming language created in 1984 by Cleve Moler. It was designed for scientific and is known for its Multi-paradigm paradigm(s). MATLAB has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing, Mathematics.",
        "popularity": 55,
        "categories": [
            "Numerical",
            "Scientific"
        ],
        "primaryCategory": "Scientific",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scientific Computing",
            "Mathematics"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "numerical-languages.js"
    },
    {
        "name": "Maxima",
        "year": 1982,
        "creator": "William Schelter",
        "code": "print(\"Hello, World!\")$",
        "desc": "Maxima is a programming language created in 1982 by William Schelter. It was designed for scientific and is known for its Multi-paradigm paradigm(s). Maxima has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing, Mathematics.",
        "popularity": 15,
        "categories": [
            "Numerical",
            "Scientific"
        ],
        "primaryCategory": "Scientific",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scientific Computing",
            "Mathematics"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "numerical-languages.js"
    },
    {
        "name": "Miranda",
        "year": 1985,
        "creator": "David Turner",
        "code": "main = [Stdout \"Hello, World!\\n\"]",
        "desc": "Miranda is a programming language created in 1985 by David Turner. It was designed for functional and is known for its Functional paradigm(s). Miranda has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 8,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "ML",
        "year": 1973,
        "creator": "Robin Milner",
        "code": "print \"Hello, World!\\n\";",
        "desc": "ML is a programming language created in 1973 by Robin Milner. It was designed for functional and is known for its Functional paradigm(s). ML has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 12,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Modula-2",
        "year": 1978,
        "creator": "Niklaus Wirth",
        "code": "MODULE HelloWorld;\nFROM InOut IMPORT WriteString, WriteLn;\nBEGIN\n  WriteString('Hello, World!');\n  WriteLn\nEND HelloWorld.",
        "desc": "Modula-2 is a programming language created in 1978 by Niklaus Wirth. It was designed for legacy and is known for its Multi-paradigm paradigm(s). Modula-2 has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 8,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Mojo",
        "year": 2023,
        "creator": "Chris Lattner",
        "code": "fn main():\n    print(\"Hello, World!\")",
        "desc": "Mojo is a programming language created in 2023 by Chris Lattner. It was designed for systems and is known for its Multi-paradigm paradigm(s). Mojo has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 28,
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
        "typing": "Mixed",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "N1QL",
        "year": 2014,
        "creator": "Couchbase",
        "code": "SELECT \"Hello, World!\" AS message",
        "desc": "N1QL is a programming language created in 2014 by Couchbase. It was designed for data science and is known for its Multi-paradigm paradigm(s). N1QL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Analysis, Statistics.",
        "popularity": 18,
        "categories": [
            "Data Science",
            "Analytics"
        ],
        "primaryCategory": "Data Science",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Analysis",
            "Statistics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "Nim",
        "year": 2008,
        "creator": "Andreas Rumpf",
        "code": "echo \"Hello, World!\"",
        "desc": "Nim is a programming language created in 2008 by Andreas Rumpf. It was designed for systems and is known for its Multi-paradigm paradigm(s). Nim has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
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
        "name": "Nushell",
        "year": 2019,
        "creator": "Jonathan Turner",
        "code": "echo \"Hello, World!\"",
        "desc": "Nushell is a programming language created in 2019 by Jonathan Turner. It was designed for shell and is known for its Multi-paradigm paradigm(s). Nushell has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Automation.",
        "popularity": 22,
        "categories": [
            "Shell",
            "Command Line"
        ],
        "primaryCategory": "Shell",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Administration",
            "Automation"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "shell-languages.js"
    },
    {
        "name": "Oberon",
        "year": 1986,
        "creator": "Niklaus Wirth",
        "code": "MODULE HelloWorld;\nIMPORT Out;\nBEGIN\n  Out.String(\"Hello, World!\"); Out.Ln\nEND HelloWorld.",
        "desc": "Oberon is a programming language created in 1986 by Niklaus Wirth. It was designed for legacy and is known for its Multi-paradigm paradigm(s). Oberon has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 5,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Objective-C",
        "year": 1984,
        "creator": "Brad Cox",
        "code": "#import <Foundation/Foundation.h>\n\nint main() {\n    NSLog(@\"Hello, World!\");\n    return 0;\n}",
        "desc": "Objective-C is a programming language created in 1984 by Brad Cox. It was designed for mobile and is known for its Object-Oriented paradigm(s). Objective-C has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mobile Development.",
        "popularity": 35,
        "categories": [
            "Mobile"
        ],
        "primaryCategory": "Mobile",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Mobile Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "mobile-languages.js"
    },
    {
        "name": "OCaml",
        "year": 1996,
        "creator": "Xavier Leroy",
        "code": "print_endline \"Hello, World!\";;",
        "desc": "OCaml is a programming language created in 1996 by Xavier Leroy. It was designed for functional and is known for its Object-Oriented, Functional paradigm(s). OCaml has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 35,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Object-Oriented",
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Octave",
        "year": 1988,
        "creator": "John Eaton",
        "code": "disp('Hello, World!')",
        "desc": "Octave is a programming language created in 1988 by John Eaton. It was designed for scientific and is known for its Multi-paradigm paradigm(s). Octave has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing, Mathematics.",
        "popularity": 25,
        "categories": [
            "Numerical",
            "Scientific"
        ],
        "primaryCategory": "Scientific",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scientific Computing",
            "Mathematics"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "numerical-languages.js"
    },
    {
        "name": "Odin",
        "year": 2016,
        "creator": "Ginger Bill",
        "code": "package main\n\nimport \"core:fmt\"\n\nmain :: proc() {\n    fmt.println(\"Hello, World!\")\n}",
        "desc": "Odin is a programming language created in 2016 by Ginger Bill. It was designed for systems and is known for its Multi-paradigm paradigm(s). Odin has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 20,
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
        "typing": "Mixed",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Ook!",
        "year": 2003,
        "creator": "David Morgan-Mar",
        "code": "Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook.\nOok! Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook?\nOok! Ook! Ook? Ook! Ook? Ook. Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook.\nOok. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook!\nOok! Ook! Ook! Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook. Ook. Ook?\nOok. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook! Ook.",
        "desc": "Ook! is a programming language created in 2003 by David Morgan-Mar. It was designed for esoteric and is known for its Multi-paradigm paradigm(s). Ook! has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 5,
        "categories": [
            "Esoteric",
            "Educational"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "Org-mode",
        "year": 2003,
        "creator": "Carsten Dominik",
        "code": "* Hello, World!\n\nThis is a *Hello, World!* example in Org-mode.",
        "desc": "Org-mode is a programming language created in 2003 by Carsten Dominik. It was designed for markup and is known for its Multi-paradigm paradigm(s). Org-mode has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Documentation, Web.",
        "popularity": 15,
        "categories": [
            "Markup",
            "Documentation"
        ],
        "primaryCategory": "Markup",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Documentation",
            "Web"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "markup-languages.js"
    },
    {
        "name": "Pascal",
        "year": 1970,
        "creator": "Niklaus Wirth",
        "code": "program HelloWorld;\nbegin\n  writeln('Hello, World!');\nend.",
        "desc": "Pascal is a programming language created in 1970 by Niklaus Wirth. It was designed for legacy and is known for its Procedural paradigm(s). Pascal has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 20,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "PDP-11 Assembly",
        "year": 1970,
        "creator": "DEC",
        "code": ".TITLE HELLO\n.MCALL .TTYOUT,.EXIT\nSTART: MOV #MSG,R1\nLOOP: MOVB (R1)+,R0\n      BEQ DONE\n      .TTYOUT\n      BR LOOP\nDONE: .EXIT\nMSG: .ASCII /Hello, World!/<0>\n.END START",
        "desc": "PDP-11 Assembly is a programming language created in 1970 by DEC. It was designed for vintage and is known for its Multi-paradigm paradigm(s). PDP-11 Assembly has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 5,
        "categories": [
            "Vintage",
            "Historical"
        ],
        "primaryCategory": "Vintage",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "vintage-languages.js"
    },
    {
        "name": "Perl",
        "year": 1987,
        "creator": "Larry Wall",
        "code": "print \"Hello, World!\\n\";",
        "desc": "Perl is a programming language created in 1987 by Larry Wall. It was designed for scripting and is known for its Multi-paradigm paradigm(s). Perl has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Automation, System Administration.",
        "popularity": 45,
        "categories": [
            "Scripting",
            "Automation"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Automation",
            "System Administration"
        ],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "PhoneGap",
        "year": 2009,
        "creator": "Nitobi",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <script src=\"cordova.js\"></script>\n</body>\n</html>",
        "desc": "PhoneGap is a programming language created in 2009 by Nitobi. It was designed for mobile and is known for its Multi-paradigm paradigm(s). PhoneGap has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mobile Development.",
        "popularity": 25,
        "categories": [
            "Mobile"
        ],
        "primaryCategory": "Mobile",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Mobile Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "mobile-languages.js"
    },
    {
        "name": "PHP",
        "year": 1995,
        "creator": "Rasmus Lerdorf",
        "code": "<?php\necho \"Hello, World!\";\n?>",
        "desc": "PHP is a programming language created in 1995 by Rasmus Lerdorf. It was designed for popular and is known for its Multi-paradigm paradigm(s). PHP has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 88,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Piet",
        "year": 2001,
        "creator": "David Morgan-Mar",
        "code": "[This would be a colorful bitmap image representing the program]",
        "desc": "Piet is a programming language created in 2001 by David Morgan-Mar. It was designed for esoteric and is known for its Multi-paradigm paradigm(s). Piet has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 7,
        "categories": [
            "Esoteric",
            "Educational"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "PL/I",
        "year": 1964,
        "creator": "IBM",
        "code": "hello: proc options(main);\n  put list('Hello, World!');\nend hello;",
        "desc": "PL/I is a programming language created in 1964 by IBM. It was designed for legacy and is known for its Procedural paradigm(s). PL/I has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
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
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Pony",
        "year": 2012,
        "creator": "Sylvan Clebsch",
        "code": "actor Main\n  new create(env: Env) =>\n    env.out.print(\"Hello, World!\")",
        "desc": "Pony is a programming language created in 2012 by Sylvan Clebsch. It was designed for emerging and is known for its Object-Oriented paradigm(s). Pony has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 7,
        "categories": [
            "Emerging",
            "Modern"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "PostScript",
        "year": 1982,
        "creator": "John Warnock",
        "code": "/Helvetica findfont 12 scalefont setfont\n100 100 moveto\n(Hello, World!) show\nshowpage",
        "desc": "PostScript is a programming language created in 1982 by John Warnock. It was designed for specialized and is known for its Multi-paradigm paradigm(s). PostScript has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 12,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "PowerShell",
        "year": 2006,
        "creator": "Jeffrey Snover",
        "code": "Write-Host \"Hello, World!\"",
        "desc": "PowerShell is a programming language created in 2006 by Jeffrey Snover. It was designed for popular and is known for its Multi-paradigm paradigm(s). PowerShell has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 65,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Mixed",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Puppet",
        "year": 2005,
        "creator": "Luke Kanies",
        "code": "notify { 'Hello, World!': }",
        "desc": "Puppet is a programming language created in 2005 by Luke Kanies. It was designed for configuration and is known for its Multi-paradigm paradigm(s). Puppet has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 25,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "PureScript",
        "year": 2013,
        "creator": "Phil Freeman",
        "code": "module Main where\n\nimport Prelude\nimport Effect.Console (log)\n\nmain = log \"Hello, World!\"",
        "desc": "PureScript is a programming language created in 2013 by Phil Freeman. It was designed for web and is known for its Functional paradigm(s). PureScript has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 15,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Functional"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Python",
        "year": 1991,
        "creator": "Guido van Rossum",
        "code": "print(\"Hello, World!\")",
        "desc": "Python is a programming language created in 1991 by Guido van Rossum. It was designed for popular and is known for its Object-Oriented, Imperative paradigm(s). Python has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 98,
        "link": "https://www.python.org/",
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Object-Oriented",
            "Imperative"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Q",
        "year": 2003,
        "creator": "Arthur Whitney",
        "code": "\"Hello, World!\"",
        "desc": "Q is a programming language created in 2003 by Arthur Whitney. It was designed for academic and is known for its Multi-paradigm paradigm(s). Q has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Formal Methods.",
        "popularity": 10,
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
            "Formal Methods"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "R",
        "year": 1993,
        "creator": "Ross Ihaka",
        "code": "print(\"Hello, World!\")",
        "desc": "R is a programming language created in 1993 by Ross Ihaka. It was designed for popular and is known for its Multi-paradigm paradigm(s). R has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 68,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Mixed",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Racket",
        "year": 1995,
        "creator": "PLT Inc.",
        "code": "#lang racket\n(displayln \"Hello, World!\")",
        "desc": "Racket is a programming language created in 1995 by PLT Inc.. It was designed for functional and is known for its Multi-paradigm paradigm(s). Racket has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 22,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "React",
        "year": 2013,
        "creator": "Facebook",
        "code": "import React from 'react';\n\nfunction HelloWorld() {\n  return <h1>Hello, World!</h1>;\n}\n\nexport default HelloWorld;",
        "desc": "React is a programming language created in 2013 by Facebook. It was designed for web and is known for its Multi-paradigm paradigm(s). React has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 85,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "React Native",
        "year": 2015,
        "creator": "Facebook",
        "code": "import React from 'react';\nimport { Text, View } from 'react-native';\n\nconst HelloWorld = () => {\n  return (\n    <View>\n      <Text>Hello, World!</Text>\n    </View>\n  );\n};\n\nexport default HelloWorld;",
        "desc": "React Native is a programming language created in 2015 by Facebook. It was designed for mobile and is known for its Multi-paradigm paradigm(s). React Native has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mobile Development.",
        "popularity": 65,
        "categories": [
            "Mobile"
        ],
        "primaryCategory": "Mobile",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Mobile Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "mobile-languages.js"
    },
    {
        "name": "Red",
        "year": 2011,
        "creator": "Nenad Rakocevic",
        "code": "print \"Hello, World!\"",
        "desc": "Red is a programming language created in 2011 by Nenad Rakocevic. It was designed for functional and is known for its Multi-paradigm paradigm(s). Red has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 12,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Regex",
        "year": 1951,
        "creator": "Stephen Kleene",
        "code": "Hello,\\s+World!",
        "desc": "Regex is a programming language created in 1951 by Stephen Kleene. It was designed for specialized and is known for its Multi-paradigm paradigm(s). Regex has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 60,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "Ren'Py",
        "year": 2004,
        "creator": "PyTom",
        "code": "label start:\n    \"Hello, World!\"\n    return",
        "desc": "Ren'Py is a programming language created in 2004 by PyTom. It was designed for game development and is known for its Multi-paradigm paradigm(s). Ren'Py has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Game Development, Graphics.",
        "popularity": 15,
        "categories": [
            "Game Development"
        ],
        "primaryCategory": "Game Development",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Game Development",
            "Graphics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "reStructuredText",
        "year": 2002,
        "creator": "David Goodger",
        "code": "Hello, World!\n=============\n\nThis is a **Hello, World!** example.",
        "desc": "reStructuredText is a programming language created in 2002 by David Goodger. It was designed for markup and is known for its Multi-paradigm paradigm(s). reStructuredText has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Documentation, Web.",
        "popularity": 25,
        "categories": [
            "Markup",
            "Documentation"
        ],
        "primaryCategory": "Markup",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Documentation",
            "Web"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "markup-languages.js"
    },
    {
        "name": "Rexx",
        "year": 1979,
        "creator": "Mike Cowlishaw",
        "code": "say \"Hello, World!\"",
        "desc": "Rexx is a programming language created in 1979 by Mike Cowlishaw. It was designed for additional and is known for its Multi-paradigm paradigm(s). Rexx has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 10,
        "categories": [
            "Additional"
        ],
        "primaryCategory": "Additional",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Dynamic",
        "sourceFile": "additional-languages.js"
    },
    {
        "name": "Roc",
        "year": 2018,
        "creator": "Richard Feldman",
        "code": "app \"hello\"\n    packages { pf: \"https://github.com/roc-lang/basic-cli/releases/download/0.5.0/Cufzl36_SnJ4QbOoEmiJ5dIpUxBvdB3NEySvuH82Wio.tar.br\" }\n    imports [pf.Stdout]\n    provides [main] to pf\n\nmain =\n    Stdout.line \"Hello, World!\"",
        "desc": "Roc is a programming language created in 2018 by Richard Feldman. It was designed for emerging and is known for its Functional paradigm(s). Roc has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 6,
        "categories": [
            "Emerging",
            "Modern"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "Ruby",
        "year": 1995,
        "creator": "Yukihiro Matsumoto",
        "code": "puts \"Hello, World!\"",
        "desc": "Ruby is a programming language created in 1995 by Yukihiro Matsumoto. It was designed for popular and is known for its Object-Oriented paradigm(s). Ruby has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 74,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Rust",
        "year": 2010,
        "creator": "Graydon Hoare",
        "code": "fn main() {\n    println!(\"Hello, World!\");\n}",
        "desc": "Rust is a programming language created in 2010 by Graydon Hoare. It was designed for popular and is known for its Multi-paradigm paradigm(s). Rust has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 80,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "SageMath",
        "year": 2005,
        "creator": "William Stein",
        "code": "print(\"Hello, World!\")",
        "desc": "SageMath is a programming language created in 2005 by William Stein. It was designed for scientific and is known for its Multi-paradigm paradigm(s). SageMath has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing, Mathematics.",
        "popularity": 18,
        "categories": [
            "Numerical",
            "Scientific"
        ],
        "primaryCategory": "Scientific",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scientific Computing",
            "Mathematics"
        ],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "numerical-languages.js"
    },
    {
        "name": "SaltStack",
        "year": 2011,
        "creator": "Thomas Hatch",
        "code": "hello_world:\n  cmd.run:\n    - name: echo \"Hello, World!\"",
        "desc": "SaltStack is a programming language created in 2011 by Thomas Hatch. It was designed for configuration and is known for its Multi-paradigm paradigm(s). SaltStack has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 18,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "SASS",
        "year": 2006,
        "creator": "Hampton Catlin",
        "code": "$message: \"Hello, World!\";\n\nbody::before {\n  content: $message;\n  font-size: 2em;\n  display: block;\n  text-align: center;\n}",
        "desc": "SASS is a programming language created in 2006 by Hampton Catlin. It was designed for web and is known for its Multi-paradigm paradigm(s). SASS has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 60,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Dynamic",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Scala",
        "year": 2003,
        "creator": "Martin Odersky",
        "code": "object HelloWorld extends App {\n  println(\"Hello, World!\")\n}",
        "desc": "Scala is a programming language created in 2003 by Martin Odersky. It was designed for popular and is known for its Object-Oriented, Functional paradigm(s). Scala has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 62,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Object-Oriented",
            "Functional"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Scheme",
        "year": 1975,
        "creator": "Guy Steele",
        "code": "(display \"Hello, World!\")\n(newline)",
        "desc": "Scheme is a programming language created in 1975 by Guy Steele. It was designed for functional and is known for its Functional paradigm(s). Scheme has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 15,
        "categories": [
            "Functional"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Sed",
        "year": 1974,
        "creator": "Lee McMahon",
        "code": "s/.*/Hello, World!/",
        "desc": "Sed is a programming language created in 1974 by Lee McMahon. It was designed for specialized and is known for its Multi-paradigm paradigm(s). Sed has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 25,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "Shakespeare",
        "year": 2001,
        "creator": "Karl Hasselström",
        "code": "The Infamous Hello World Program.\n\nRomeo, a young man with a remarkable patience.\nJuliet, a likewise young woman of remarkable grace.\nOphelia, a remarkable woman much in dispute with Hamlet.\nHamlet, the flatterer of Andersen Insulting A/S.\n\n                    Act I: Hamlet's insults and flattery.\n\n                    Scene I: The insulting of Romeo.\n\n[Enter Hamlet and Romeo]\n\nHamlet:\n You lying stupid fatherless big smelly half-witted coward!\n You are as stupid as the difference between a handsome rich brave\n hero and thyself! Speak your mind!\n\n You are as brave as the sum of your fat little stuffed misused dusty\n old rotten codpiece and a beautiful fair warm peaceful sunny summer's\n day. You are as healthy as the difference between the sum of the\n sweetest reddest rose and my father and yourself! Speak your mind!\n\n You are as cowardly as the sum of yourself and the difference\n between a big mighty proud kingdom and a horse. Speak your mind.\n\n Speak your mind!\n\n[Exit Romeo]\n\n                    Scene II: The praising of Juliet.\n\n[Enter Juliet]\n\nHamlet:\n Thou are as sweet as the sum of the sum of Romeo and his horse and his\n black cat! Speak thy mind!\n\n[Exit Juliet]\n\n                    Scene III: The praising of Ophelia.\n\n[Enter Ophelia]\n\nHamlet:\n Thou are as lovely as the product of a large rural town and my amazing\n bottomless embroidered purse. Speak thy mind!\n\n Thou are as loving as the product of the bluest clearest sweetest sky\n and the sum of a squirrel and a white horse. Thou are as beautiful as\n the difference between Juliet and thyself. Speak thy mind!\n\n[Exeunt Ophelia and Hamlet]\n\n\n                    Act II: Behind Hamlet's back.\n\n                    Scene I: Romeo and Juliet's conversation.\n\n[Enter Romeo and Juliet]\n\nRomeo:\n Speak your mind. You are as worried as the sum of all the\n squirrels and the product of my weight and your weight.\n\nJuliet:\n Speak your mind!\n\n[Exeunt Romeo and Juliet]\n\n                    Scene II: Ophelia and Hamlet's conversation.\n\n[Enter Ophelia and Hamlet]\n\nOphelia:\n Speak your mind!\n\nHamlet:\n You are as bad as the sum of a fat lazy iguana and a big old yellow\n lazy fat pony and a big old lazy coward! Speak your mind!\n\n[Exeunt]",
        "desc": "Shakespeare is a programming language created in 2001 by Karl Hasselström. It was designed for esoteric and is known for its Multi-paradigm paradigm(s). Shakespeare has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 9,
        "categories": [
            "Esoteric",
            "Educational"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "SNOBOL",
        "year": 1962,
        "creator": "Ralph Griswold",
        "code": "OUTPUT = \"Hello, World!\"\nEND",
        "desc": "SNOBOL is a programming language created in 1962 by Ralph Griswold. It was designed for vintage and is known for its Multi-paradigm paradigm(s). SNOBOL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 3,
        "categories": [
            "Vintage",
            "Historical"
        ],
        "primaryCategory": "Vintage",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "vintage-languages.js"
    },
    {
        "name": "SPARQL",
        "year": 2008,
        "creator": "W3C",
        "code": "PREFIX ex: <http://example.org/>\n\nSELECT ?message\nWHERE {\n  ex:greeting ex:message \"Hello, World!\" .\n}",
        "desc": "SPARQL is a programming language created in 2008 by W3C. It was designed for data science and is known for its Multi-paradigm paradigm(s). SPARQL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Analysis, Statistics.",
        "popularity": 14,
        "categories": [
            "Data Science",
            "Analytics"
        ],
        "primaryCategory": "Data Science",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Analysis",
            "Statistics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "SPICE",
        "year": 1973,
        "creator": "UC Berkeley",
        "code": "* Hello World SPICE Circuit\n.print \"Hello, World!\"\n.end",
        "desc": "SPICE is a programming language created in 1973 by UC Berkeley. It was designed for specialized and is known for its Multi-paradigm paradigm(s). SPICE has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 15,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "SQL",
        "year": 1974,
        "creator": "Donald Chamberlin",
        "code": "SELECT 'Hello, World!' AS greeting;",
        "desc": "SQL is a programming language created in 1974 by Donald Chamberlin. It was designed for popular and is known for its Multi-paradigm paradigm(s). SQL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 88,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Mixed",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Svelte",
        "year": 2016,
        "creator": "Rich Harris",
        "code": "<script>\n  let message = 'Hello, World!';\n</script>\n\n<h1>{message}</h1>",
        "desc": "Svelte is a programming language created in 2016 by Rich Harris. It was designed for web and is known for its Multi-paradigm paradigm(s). Svelte has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 45,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Swift",
        "year": 2014,
        "creator": "Apple Team",
        "code": "print(\"Hello, World!\")",
        "desc": "Swift is a programming language created in 2014 by Apple Team. It was designed for popular and is known for its Object-Oriented paradigm(s). Swift has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 78,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "SystemVerilog",
        "year": 2002,
        "creator": "Accellera",
        "code": "module hello;\n  initial begin\n    $display(\"Hello, World!\");\n    $finish;\n  end\nendmodule",
        "desc": "SystemVerilog is a programming language created in 2002 by Accellera. It was designed for specialized and is known for its Multi-paradigm paradigm(s). SystemVerilog has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 28,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "Tcl",
        "year": 1988,
        "creator": "John Ousterhout",
        "code": "puts \"Hello, World!\"",
        "desc": "Tcl is a programming language created in 1988 by John Ousterhout. It was designed for scripting and is known for its Multi-paradigm paradigm(s). Tcl has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Automation, System Administration.",
        "popularity": 25,
        "categories": [
            "Scripting",
            "Automation"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Automation",
            "System Administration"
        ],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Tcsh",
        "year": 1983,
        "creator": "Ken Greer",
        "code": "#!/bin/tcsh\necho \"Hello, World!\"",
        "desc": "Tcsh is a programming language created in 1983 by Ken Greer. It was designed for shell and is known for its Multi-paradigm paradigm(s). Tcsh has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Automation.",
        "popularity": 15,
        "categories": [
            "Shell",
            "Command Line"
        ],
        "primaryCategory": "Shell",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Administration",
            "Automation"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "shell-languages.js"
    },
    {
        "name": "Terraform",
        "year": 2014,
        "creator": "Mitchell Hashimoto",
        "code": "output \"hello_world\" {\n  value = \"Hello, World!\"\n}",
        "desc": "Terraform is a programming language created in 2014 by Mitchell Hashimoto. It was designed for configuration and is known for its Multi-paradigm paradigm(s). Terraform has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 48,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "Textile",
        "year": 2002,
        "creator": "Dean Allen",
        "code": "h1. Hello, World!\n\nThis is a *Hello, World!* example in Textile.",
        "desc": "Textile is a programming language created in 2002 by Dean Allen. It was designed for markup and is known for its Multi-paradigm paradigm(s). Textile has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Documentation, Web.",
        "popularity": 8,
        "categories": [
            "Markup",
            "Documentation"
        ],
        "primaryCategory": "Markup",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Documentation",
            "Web"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "markup-languages.js"
    },
    {
        "name": "Titanium",
        "year": 2008,
        "creator": "Appcelerator",
        "code": "var win = Ti.UI.createWindow({\n    backgroundColor: 'white'\n});\n\nvar label = Ti.UI.createLabel({\n    text: 'Hello, World!',\n    textAlign: 'center',\n    width: 'auto'\n});\n\nwin.add(label);\nwin.open();",
        "desc": "Titanium is a programming language created in 2008 by Appcelerator. It was designed for mobile and is known for its Multi-paradigm paradigm(s). Titanium has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mobile Development.",
        "popularity": 15,
        "categories": [
            "Mobile"
        ],
        "primaryCategory": "Mobile",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Mobile Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "mobile-languages.js"
    },
    {
        "name": "TOML",
        "year": 2013,
        "creator": "Tom Preston-Werner",
        "code": "message = \"Hello, World!\"\nlanguage = \"TOML\"",
        "desc": "TOML is a programming language created in 2013 by Tom Preston-Werner. It was designed for data science and is known for its Multi-paradigm paradigm(s). TOML has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Analysis, Statistics.",
        "popularity": 15,
        "categories": [
            "Data Science",
            "Analytics"
        ],
        "primaryCategory": "Data Science",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Analysis",
            "Statistics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "TypeScript",
        "year": 2012,
        "creator": "Anders Hejlsberg",
        "code": "console.log(\"Hello, World!\");",
        "desc": "TypeScript is a programming language created in 2012 by Anders Hejlsberg. It was designed for popular and is known for its Multi-paradigm paradigm(s). TypeScript has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 92,
        "categories": [
            "Popular"
        ],
        "primaryCategory": "Popular",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "popular-languages.js"
    },
    {
        "name": "Unison",
        "year": 2015,
        "creator": "Paul Chiusano",
        "code": "main : '{IO, Exception} ()\nmain _ = printLine \"Hello, World!\"",
        "desc": "Unison is a programming language created in 2015 by Paul Chiusano. It was designed for emerging and is known for its Functional paradigm(s). Unison has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 10,
        "categories": [
            "Emerging",
            "Modern"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "UnityScript",
        "year": 2005,
        "creator": "Unity Technologies",
        "code": "#pragma strict\n\nfunction Start() {\n    print(\"Hello, World!\");\n}",
        "desc": "UnityScript is a programming language created in 2005 by Unity Technologies. It was designed for game development and is known for its Multi-paradigm paradigm(s). UnityScript has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Game Development, Graphics.",
        "popularity": 15,
        "categories": [
            "Game Development"
        ],
        "primaryCategory": "Game Development",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Game Development",
            "Graphics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "V",
        "year": 2019,
        "creator": "Alexander Medvednikov",
        "code": "fn main() {\n    println('Hello, World!')\n}",
        "desc": "V is a programming language created in 2019 by Alexander Medvednikov. It was designed for systems and is known for its Multi-paradigm paradigm(s). V has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 12,
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
        "typing": "Mixed",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Vagrant",
        "year": 2010,
        "creator": "Mitchell Hashimoto",
        "code": "Vagrant.configure(\"2\") do |config|\n  config.vm.provision \"shell\", inline: \"echo Hello, World!\"\nend",
        "desc": "Vagrant is a programming language created in 2010 by Mitchell Hashimoto. It was designed for configuration and is known for its Multi-paradigm paradigm(s). Vagrant has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as DevOps, Infrastructure.",
        "popularity": 30,
        "categories": [
            "Configuration",
            "DevOps"
        ],
        "primaryCategory": "Configuration",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "DevOps",
            "Infrastructure"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "Verilog",
        "year": 1984,
        "creator": "Phil Moorby",
        "code": "module hello;\n  initial begin\n    $display(\"Hello, World!\");\n    $finish;\n  end\nendmodule",
        "desc": "Verilog is a programming language created in 1984 by Phil Moorby. It was designed for specialized and is known for its Multi-paradigm paradigm(s). Verilog has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 30,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "VHDL",
        "year": 1987,
        "creator": "IEEE",
        "code": "library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\n\nentity hello is\nend hello;\n\narchitecture Behavioral of hello is\nbegin\n    process\n    begin\n        report \"Hello, World!\";\n        wait;\n    end process;\nend Behavioral;",
        "desc": "VHDL is a programming language created in 1987 by IEEE. It was designed for specialized and is known for its Multi-paradigm paradigm(s). VHDL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 25,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "Visual Basic",
        "year": 1991,
        "creator": "Microsoft",
        "code": "Module HelloWorld\n    Sub Main()\n        Console.WriteLine(\"Hello, World!\")\n    End Sub\nEnd Module",
        "desc": "Visual Basic is a programming language created in 1991 by Microsoft. It was designed for legacy and is known for its Multi-paradigm paradigm(s). Visual Basic has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 40,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Intermediate to Advanced",
        "typing": "Mixed",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Vue.js",
        "year": 2014,
        "creator": "Evan You",
        "code": "<template>\n  <div>{{ message }}</div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: 'Hello, World!'\n    }\n  }\n}\n</script>",
        "desc": "Vue.js is a programming language created in 2014 by Evan You. It was designed for web and is known for its Multi-paradigm paradigm(s). Vue.js has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 70,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "WebAssembly",
        "year": 2017,
        "creator": "W3C",
        "code": "(module\n  (import \"env\" \"print\" (func $print (param i32)))\n  (func $hello\n    i32.const 42\n    call $print\n  )\n  (export \"hello\" (func $hello))\n)",
        "desc": "WebAssembly is a programming language created in 2017 by W3C. It was designed for web and is known for its Multi-paradigm paradigm(s). WebAssembly has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 50,
        "categories": [
            "Web",
            "Frontend",
            "Backend"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner to Advanced",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Whitespace",
        "year": 2003,
        "creator": "Edwin Brady",
        "code": "   \t  \t   \n   \t \t\t  \n   \t \t\t \t\n   \t \t\t\t \n   \t \t \t  \n   \t     \t\n   \t   \t\t \n   \t \t\t\t\t\n   \t \t\t\t \n   \t \t\t  \n   \t\t  \t \n\t\n  \n\n\n",
        "desc": "Whitespace is a programming language created in 2003 by Edwin Brady. It was designed for esoteric and is known for its Multi-paradigm paradigm(s). Whitespace has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 8,
        "categories": [
            "Esoteric",
            "Educational"
        ],
        "primaryCategory": "Esoteric",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Varies",
        "typing": "Mixed",
        "sourceFile": "esoteric-languages.js"
    },
    {
        "name": "WikiText",
        "year": 2001,
        "creator": "Ward Cunningham",
        "code": "= Hello, World! =\n\nThis is a '''Hello, World!''' example in WikiText.",
        "desc": "WikiText is a programming language created in 2001 by Ward Cunningham. It was designed for markup and is known for its Multi-paradigm paradigm(s). WikiText has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Documentation, Web.",
        "popularity": 12,
        "categories": [
            "Markup",
            "Documentation"
        ],
        "primaryCategory": "Markup",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Documentation",
            "Web"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "markup-languages.js"
    },
    {
        "name": "Xamarin",
        "year": 2011,
        "creator": "Nat Friedman",
        "code": "using System;\nusing Xamarin.Forms;\n\nnamespace HelloWorld\n{\n    public partial class MainPage : ContentPage\n    {\n        public MainPage()\n        {\n            InitializeComponent();\n            Content = new Label\n            {\n                Text = \"Hello, World!\",\n                HorizontalOptions = LayoutOptions.Center,\n                VerticalOptions = LayoutOptions.Center\n            };\n        }\n    }\n}",
        "desc": "Xamarin is a programming language created in 2011 by Nat Friedman. It was designed for mobile and is known for its Multi-paradigm paradigm(s). Xamarin has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mobile Development.",
        "popularity": 30,
        "categories": [
            "Mobile"
        ],
        "primaryCategory": "Mobile",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Mobile Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "mobile-languages.js"
    },
    {
        "name": "XML",
        "year": 1996,
        "creator": "W3C",
        "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<message>\n  <text>Hello, World!</text>\n</message>",
        "desc": "XML is a programming language created in 1996 by W3C. It was designed for data science and is known for its Multi-paradigm paradigm(s). XML has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Analysis, Statistics.",
        "popularity": 40,
        "categories": [
            "Data Science",
            "Analytics"
        ],
        "primaryCategory": "Data Science",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Analysis",
            "Statistics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "Xonsh",
        "year": 2015,
        "creator": "Anthony Scopatz",
        "code": "#!/usr/bin/env xonsh\necho \"Hello, World!\"",
        "desc": "Xonsh is a programming language created in 2015 by Anthony Scopatz. It was designed for shell and is known for its Multi-paradigm paradigm(s). Xonsh has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Automation.",
        "popularity": 16,
        "categories": [
            "Shell",
            "Command Line"
        ],
        "primaryCategory": "Shell",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Administration",
            "Automation"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "shell-languages.js"
    },
    {
        "name": "XPath",
        "year": 1999,
        "creator": "W3C",
        "code": "//text()[contains(., 'Hello, World!')]",
        "desc": "XPath is a programming language created in 1999 by W3C. It was designed for specialized and is known for its Multi-paradigm paradigm(s). XPath has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 22,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "XQuery",
        "year": 2007,
        "creator": "W3C",
        "code": "\"Hello, World!\"",
        "desc": "XQuery is a programming language created in 2007 by W3C. It was designed for specialized and is known for its Functional paradigm(s). XQuery has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 16,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Functional"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "XSLT",
        "year": 1999,
        "creator": "W3C",
        "code": "<?xml version=\"1.0\"?>\n<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n  <xsl:template match=\"/\">\n    <html><body>Hello, World!</body></html>\n  </xsl:template>\n</xsl:stylesheet>",
        "desc": "XSLT is a programming language created in 1999 by W3C. It was designed for specialized and is known for its Multi-paradigm paradigm(s). XSLT has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as various fields.",
        "popularity": 18,
        "categories": [
            "Specialized",
            "Domain-Specific"
        ],
        "primaryCategory": "Specialized",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Mixed",
        "sourceFile": "specialized-languages.js"
    },
    {
        "name": "YAML",
        "year": 2001,
        "creator": "Clark Evans",
        "code": "message: \"Hello, World!\"\nlanguage: YAML",
        "desc": "YAML is a programming language created in 2001 by Clark Evans. It was designed for data science and is known for its Multi-paradigm paradigm(s). YAML has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Analysis, Statistics.",
        "popularity": 45,
        "categories": [
            "Data Science",
            "Analytics"
        ],
        "primaryCategory": "Data Science",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Analysis",
            "Statistics"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "Zig",
        "year": 2016,
        "creator": "Andrew Kelley",
        "code": "const std = @import(\"std\");\n\npub fn main() !void {\n    const stdout = std.io.getStdOut().writer();\n    try stdout.print(\"Hello, World!\\n\");\n}",
        "desc": "Zig is a programming language created in 2016 by Andrew Kelley. It was designed for systems and is known for its Multi-paradigm paradigm(s). Zig has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming, Operating Systems.",
        "popularity": 25,
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
        "typing": "Mixed",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Deno",
        "year": 2020,
        "creator": "Ryan Dahl",
        "code": "console.log(\"Hello, World!\");",
        "desc": "Deno is a programming language created in 2020 by Ryan Dahl. It was designed for runtime and is known for its Multi-paradigm paradigm(s). Deno has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development, Server-side.",
        "popularity": 75,
        "categories": [
            "Web",
            "Backend",
            "Runtime"
        ],
        "primaryCategory": "Runtime",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development",
            "Server-side"
        ],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Bun",
        "year": 2022,
        "creator": "Jarred Sumner",
        "code": "console.log(\"Hello, World!\");",
        "desc": "Bun is a programming language created in 2022 by Jarred Sumner. It was designed for runtime and is known for its Multi-paradigm paradigm(s). Bun has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development, Server-side.",
        "popularity": 70,
        "categories": [
            "Web",
            "Backend",
            "Runtime"
        ],
        "primaryCategory": "Runtime",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development",
            "Server-side"
        ],
        "difficulty": "Beginner to Intermediate",
        "typing": "Dynamic",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Bend",
        "year": 2024,
        "creator": "Victor Taelin",
        "code": "def main:\n  return \"Hello, World!\"",
        "desc": "Bend is a programming language created in 2024 by Victor Taelin. It was designed for emerging and is known for its Functional, Parallel paradigm(s). Bend has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as High Performance Computing, Parallel Processing.",
        "popularity": 25,
        "categories": [
            "Emerging",
            "Parallel"
        ],
        "primaryCategory": "Emerging",
        "paradigms": [
            "Functional",
            "Parallel"
        ],
        "domains": [
            "High Performance Computing",
            "Parallel Processing"
        ],
        "difficulty": "Intermediate to Advanced",
        "typing": "Static",
        "sourceFile": "emerging-languages.js"
    },
    {
        "name": "ALGOL 60",
        "year": 1960,
        "creator": "ALGOL Committee",
        "code": "begin\n  outstring(1, \"Hello, World!\");\n  outimage(1)\nend",
        "desc": "ALGOL 60 is a programming language created in 1960 by ALGOL Committee. It was designed for historical and is known for its Procedural paradigm(s). ALGOL 60 has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing.",
        "popularity": 8,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Historical",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Scientific Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "historical-languages.js"
    },
    {
        "name": "ALGOL 68",
        "year": 1968,
        "creator": "Adriaan van Wijngaarden",
        "code": "BEGIN\n  print((\"Hello, World!\", newline))\nEND",
        "desc": "ALGOL 68 is a programming language created in 1968 by Adriaan van Wijngaarden. It was designed for historical and is known for its Procedural, Concurrent paradigm(s). ALGOL 68 has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing.",
        "popularity": 7,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Historical",
        "paradigms": [
            "Procedural",
            "Concurrent"
        ],
        "domains": [
            "Scientific Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "historical-languages.js"
    },
    {
        "name": "APL",
        "year": 1966,
        "creator": "Kenneth E. Iverson",
        "code": "'Hello, World!'",
        "desc": "APL is a programming language created in 1966 by Kenneth E. Iverson. It was designed for mathematical and is known for its Array Programming, Functional paradigm(s). APL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Mathematical Computing, Data Analysis.",
        "popularity": 12,
        "categories": [
            "Legacy",
            "Mathematical"
        ],
        "primaryCategory": "Mathematical",
        "paradigms": [
            "Array Programming",
            "Functional"
        ],
        "domains": [
            "Mathematical Computing",
            "Data Analysis"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "mathematical-languages.js"
    },
    {
        "name": "AutoHotkey",
        "year": 2003,
        "creator": "Chris Mallett",
        "code": "MsgBox, Hello, World!",
        "desc": "AutoHotkey is a programming language created in 2003 by Chris Mallett. It was designed for scripting and is known for its Procedural paradigm(s). AutoHotkey has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Automation, Desktop Applications.",
        "popularity": 25,
        "categories": [
            "Scripting",
            "Automation"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Automation",
            "Desktop Applications"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "AutoLISP",
        "year": 1986,
        "creator": "Autodesk",
        "code": "(princ \"Hello, World!\")",
        "desc": "AutoLISP is a programming language created in 1986 by Autodesk. It was designed for domain-specific and is known for its Functional paradigm(s). AutoLISP has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as CAD, Engineering.",
        "popularity": 15,
        "categories": [
            "Domain-Specific",
            "CAD"
        ],
        "primaryCategory": "Domain-Specific",
        "paradigms": [
            "Functional"
        ],
        "domains": [
            "CAD",
            "Engineering"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "domain-specific-languages.js"
    },
    {
        "name": "Batch",
        "year": 1981,
        "creator": "Microsoft",
        "code": "@echo off\necho Hello, World!",
        "desc": "Batch is a programming language created in 1981 by Microsoft. It was designed for scripting and is known for its Procedural paradigm(s). Batch has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Automation.",
        "popularity": 30,
        "categories": [
            "Scripting",
            "System"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "System Administration",
            "Automation"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "BBC BASIC",
        "year": 1981,
        "creator": "Sophie Wilson",
        "code": "PRINT \"Hello, World!\"",
        "desc": "BBC BASIC is a programming language created in 1981 by Sophie Wilson. It was designed for legacy and is known for its Procedural paradigm(s). BBC BASIC has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Home Computing.",
        "popularity": 8,
        "categories": [
            "Legacy",
            "Educational"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Education",
            "Home Computing"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Boo",
        "year": 2003,
        "creator": "Rodrigo B. de Oliveira",
        "code": "print \"Hello, World!\"",
        "desc": "Boo is a programming language created in 2003 by Rodrigo B. de Oliveira. It was designed for object-oriented and is known for its Object-Oriented paradigm(s). Boo has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development, .NET Applications.",
        "popularity": 10,
        "categories": [
            "Object-Oriented",
            ".NET"
        ],
        "primaryCategory": "Object-Oriented",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Web Development",
            ".NET Applications"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "dotnet-languages.js"
    },
    {
        "name": "Clipper",
        "year": 1985,
        "creator": "Nantucket Corporation",
        "code": "? \"Hello, World!\"",
        "desc": "Clipper is a programming language created in 1985 by Nantucket Corporation. It was designed for legacy and is known for its Procedural paradigm(s). Clipper has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Database Applications, Business Software.",
        "popularity": 5,
        "categories": [
            "Legacy",
            "Database"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Database Applications",
            "Business Software"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "database-languages.js"
    },
    {
        "name": "CORAL 66",
        "year": 1964,
        "creator": "Royal Radar Establishment",
        "code": "WRITE(\"Hello, World!\")",
        "desc": "CORAL 66 is a programming language created in 1964 by Royal Radar Establishment. It was designed for legacy and is known for its Procedural paradigm(s). CORAL 66 has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Embedded Systems, Real-time Systems.",
        "popularity": 2,
        "categories": [
            "Legacy",
            "Embedded"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Embedded Systems",
            "Real-time Systems"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "embedded-languages.js"
    },
    {
        "name": "CPL",
        "year": 1963,
        "creator": "Christopher Strachey",
        "code": "§ (main) {\n  write(\"Hello, World!\");\n}",
        "desc": "CPL is a programming language created in 1963 by Christopher Strachey. It was designed for historical and is known for its Multi-paradigm paradigm(s). CPL has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Programming.",
        "popularity": 3,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Historical",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Programming"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "historical-languages.js"
    },
    {
        "name": "dBASE",
        "year": 1979,
        "creator": "Wayne Ratliff",
        "code": "? \"Hello, World!\"",
        "desc": "dBASE is a programming language created in 1979 by Wayne Ratliff. It was designed for database and is known for its Procedural paradigm(s). dBASE has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Database Applications, Business Software.",
        "popularity": 8,
        "categories": [
            "Legacy",
            "Database"
        ],
        "primaryCategory": "Database",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Database Applications",
            "Business Software"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "database-languages.js"
    },
    {
        "name": "Dylan",
        "year": 1992,
        "creator": "Apple Computer",
        "code": "format-out(\"Hello, World!\\n\");",
        "desc": "Dylan is a programming language created in 1992 by Apple Computer. It was designed for multi-paradigm and is known for its Functional, Object-Oriented paradigm(s). Dylan has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as General Purpose.",
        "popularity": 5,
        "categories": [
            "Multi-paradigm",
            "Functional"
        ],
        "primaryCategory": "Multi-paradigm",
        "paradigms": [
            "Functional",
            "Object-Oriented"
        ],
        "domains": [
            "General Purpose"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Euphoria",
        "year": 1993,
        "creator": "Robert Craig",
        "code": "puts(1, \"Hello, World!\\n\")",
        "desc": "Euphoria is a programming language created in 1993 by Robert Craig. It was designed for general purpose and is known for its Procedural paradigm(s). Euphoria has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as General Purpose, Education.",
        "popularity": 8,
        "categories": [
            "General Purpose",
            "Beginner-Friendly"
        ],
        "primaryCategory": "General Purpose",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "General Purpose",
            "Education"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Forth",
        "year": 1970,
        "creator": "Charles H. Moore",
        "code": ".\"Hello, World!\"",
        "desc": "Forth is a programming language created in 1970 by Charles H. Moore. It was designed for stack-based and is known for its Procedural, Stack-based paradigm(s). Forth has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Embedded, Scientific.",
        "popularity": 10,
        "categories": [
            "Stack-based",
            "Embedded"
        ],
        "primaryCategory": "Stack-based",
        "paradigms": [
            "Procedural",
            "Stack-based"
        ],
        "domains": [
            "Embedded",
            "Scientific"
        ],
        "difficulty": "Intermediate",
        "typing": "Untyped",
        "sourceFile": "stack-languages.js"
    },
    {
        "name": "FoxPro",
        "year": 1984,
        "creator": "Fox Software",
        "code": "? \"Hello, World!\"",
        "desc": "FoxPro is a programming language created in 1984 by Fox Software. It was designed for database and is known for its Procedural paradigm(s). FoxPro has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Database Applications, Business Software.",
        "popularity": 10,
        "categories": [
            "Legacy",
            "Database"
        ],
        "primaryCategory": "Database",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Database Applications",
            "Business Software"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "database-languages.js"
    },
    {
        "name": "GW-BASIC",
        "year": 1983,
        "creator": "Microsoft",
        "code": "10 PRINT \"Hello, World!\"\n20 END",
        "desc": "GW-BASIC is a programming language created in 1983 by Microsoft. It was designed for legacy and is known for its Procedural paradigm(s). GW-BASIC has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Home Computing.",
        "popularity": 12,
        "categories": [
            "Legacy",
            "Educational"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Education",
            "Home Computing"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "HyperTalk",
        "year": 1987,
        "creator": "Bill Atkinson",
        "code": "answer \"Hello, World!\"",
        "desc": "HyperTalk is a programming language created in 1987 by Bill Atkinson. It was designed for legacy and is known for its Procedural paradigm(s). HyperTalk has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Hypermedia, Education.",
        "popularity": 5,
        "categories": [
            "Legacy",
            "Hypermedia"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Hypermedia",
            "Education"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "hypermedia-languages.js"
    },
    {
        "name": "Inform",
        "year": 1993,
        "creator": "Graham Nelson",
        "code": "[ Main;\\n  print \\\"Hello, World!^\\\";\\n];",
        "desc": "Inform is a programming language created in 1993 by Graham Nelson. It was designed for domain-specific and is known for its Declarative paradigm(s). Inform has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Interactive Fiction, Game Development.",
        "popularity": 8,
        "categories": [
            "Domain-Specific",
            "Interactive Fiction"
        ],
        "primaryCategory": "Domain-Specific",
        "paradigms": [
            "Declarative"
        ],
        "domains": [
            "Interactive Fiction",
            "Game Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "JOSS",
        "year": 1963,
        "creator": "RAND Corporation",
        "code": "1.1 TYPE \"Hello, World!\"",
        "desc": "JOSS is a programming language created in 1963 by RAND Corporation. It was designed for historical and is known for its Interactive paradigm(s). JOSS has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing.",
        "popularity": 2,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Historical",
        "paradigms": [
            "Interactive"
        ],
        "domains": [
            "Scientific Computing"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "historical-languages.js"
    },
    {
        "name": "Korn Shell",
        "year": 1983,
        "creator": "David Korn",
        "code": "#!/bin/ksh\necho \"Hello, World!\"",
        "desc": "Korn Shell is a programming language created in 1983 by David Korn. It was designed for shell and is known for its Procedural paradigm(s). Korn Shell has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Scripting.",
        "popularity": 15,
        "categories": [
            "Shell",
            "System"
        ],
        "primaryCategory": "Shell",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "System Administration",
            "Scripting"
        ],
        "difficulty": "Intermediate",
        "typing": "Untyped",
        "sourceFile": "shell-languages.js"
    },
    {
        "name": "LabVIEW",
        "year": 1986,
        "creator": "National Instruments",
        "code": "(LabVIEW is graphical; Hello World is typically a string constant wired to an indicator)",
        "desc": "LabVIEW is a programming language created in 1986 by National Instruments. It was designed for graphical and is known for its Dataflow, Visual paradigm(s). LabVIEW has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Engineering, Measurement, Automation.",
        "popularity": 20,
        "categories": [
            "Graphical",
            "Domain-specific"
        ],
        "primaryCategory": "Graphical",
        "paradigms": [
            "Dataflow",
            "Visual"
        ],
        "domains": [
            "Engineering",
            "Measurement",
            "Automation"
        ],
        "difficulty": "Intermediate",
        "typing": "Untyped",
        "sourceFile": "graphical-languages.js"
    },
    {
        "name": "LiveCode",
        "year": 2001,
        "creator": "RunRev",
        "code": "answer \"Hello, World!\"",
        "desc": "LiveCode is a programming language created in 2001 by RunRev. It was designed for scripting and is known for its Event-driven paradigm(s). LiveCode has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scripting, Education.",
        "popularity": 8,
        "categories": [
            "Scripting",
            "Graphical"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Scripting",
            "Education"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Processing",
        "year": 2001,
        "creator": "Casey Reas, Ben Fry",
        "code": "void setup() {\n  println(\"Hello, World!\");\n}",
        "desc": "Processing is a programming language created in 2001 by Casey Reas, Ben Fry. It was designed for visual arts and is known for its Procedural paradigm(s). Processing has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Art, Education.",
        "popularity": 18,
        "categories": [
            "Visual Arts",
            "Education"
        ],
        "primaryCategory": "Visual Arts",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Art",
            "Education"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "visual-languages.js"
    },
    {
        "name": "Ink",
        "year": 2016,
        "creator": "Inkle Studios",
        "code": "Hello, World!",
        "desc": "Ink is a programming language created in 2016 by Inkle Studios. It was designed for interactive fiction and is known for its Declarative paradigm(s). Ink has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Games, Storytelling.",
        "popularity": 7,
        "categories": [
            "Interactive Fiction",
            "Scripting"
        ],
        "primaryCategory": "Interactive Fiction",
        "paradigms": [
            "Declarative"
        ],
        "domains": [
            "Games",
            "Storytelling"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Mercury",
        "year": 1995,
        "creator": "Zoltan Somogyi",
        "code": "main(!IO) :-\n    io.write_string(\"Hello, World!\\n\", !IO).",
        "desc": "Mercury is a programming language created in 1995 by Zoltan Somogyi. It was designed for logic and is known for its Logic, Functional paradigm(s). Mercury has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, AI.",
        "popularity": 6,
        "categories": [
            "Logic",
            "Functional"
        ],
        "primaryCategory": "Logic",
        "paradigms": [
            "Logic",
            "Functional"
        ],
        "domains": [
            "Research",
            "AI"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "logic-languages.js"
    },
    {
        "name": "Newspeak",
        "year": 2006,
        "creator": "Gilad Bracha",
        "code": "Transcript show: 'Hello, World!'; cr.",
        "desc": "Newspeak is a programming language created in 2006 by Gilad Bracha. It was designed for object-oriented and is known for its Object-Oriented, Reflective paradigm(s). Newspeak has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Education.",
        "popularity": 5,
        "categories": [
            "Object-Oriented",
            "Reflective"
        ],
        "primaryCategory": "Object-Oriented",
        "paradigms": [
            "Object-Oriented",
            "Reflective"
        ],
        "domains": [
            "Research",
            "Education"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "object-languages.js"
    },
    {
        "name": "Xtend",
        "year": 2012,
        "creator": "Sven Efftinge",
        "code": "def main() {\n  println(\"Hello, World!\")\n}",
        "desc": "Xtend is a programming language created in 2012 by Sven Efftinge. It was designed for jvm and is known for its Object-Oriented, Functional paradigm(s). Xtend has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as JVM, Java.",
        "popularity": 6,
        "categories": [
            "JVM",
            "Java-like"
        ],
        "primaryCategory": "JVM",
        "paradigms": [
            "Object-Oriented",
            "Functional"
        ],
        "domains": [
            "JVM",
            "Java"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "jvm-languages.js"
    },
    {
        "name": "Vala",
        "year": 2006,
        "creator": "Jürg Billeter",
        "code": "void main() {\n    print(\"Hello, World!\\n\");\n}",
        "desc": "Vala is a programming language created in 2006 by Jürg Billeter. It was designed for gnome and is known for its Object-Oriented, Imperative paradigm(s). Vala has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as GNOME, Linux.",
        "popularity": 7,
        "categories": [
            "GNOME",
            "Object-Oriented"
        ],
        "primaryCategory": "GNOME",
        "paradigms": [
            "Object-Oriented",
            "Imperative"
        ],
        "domains": [
            "GNOME",
            "Linux"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "object-languages.js"
    },
    {
        "name": "Stylus",
        "year": 2010,
        "creator": "TJ Holowaychuk",
        "code": "body\n  before\n    content 'Hello, World!'",
        "desc": "Stylus is a programming language created in 2010 by TJ Holowaychuk. It was designed for web and is known for its Declarative paradigm(s). Stylus has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 10,
        "categories": [
            "Web",
            "CSS Preprocessor"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Declarative"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Twig",
        "year": 2009,
        "creator": "Fabien Potencier",
        "code": "{{ 'Hello, World!' }}",
        "desc": "Twig is a programming language created in 2009 by Fabien Potencier. It was designed for templating and is known for its Declarative paradigm(s). Twig has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development.",
        "popularity": 12,
        "categories": [
            "Templating",
            "Web"
        ],
        "primaryCategory": "Templating",
        "paradigms": [
            "Declarative"
        ],
        "domains": [
            "Web Development"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Jsonnet",
        "year": 2014,
        "creator": "Google",
        "code": "{ message: 'Hello, World!' }",
        "desc": "Jsonnet is a programming language created in 2014 by Google. It was designed for config and is known for its Declarative paradigm(s). Jsonnet has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Configuration, DevOps.",
        "popularity": 8,
        "categories": [
            "Config",
            "Templating"
        ],
        "primaryCategory": "Config",
        "paradigms": [
            "Declarative"
        ],
        "domains": [
            "Configuration",
            "DevOps"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "config-languages.js"
    },
    {
        "name": "Vale",
        "year": 2020,
        "creator": "Evan Ovadia",
        "code": "fn main() {\n    println(\"Hello, World!\");\n}",
        "desc": "Vale is a programming language created in 2020 by Evan Ovadia. It was designed for systems and is known for its Imperative paradigm(s). Vale has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Systems Programming.",
        "popularity": 5,
        "categories": [
            "Systems",
            "Memory Safe"
        ],
        "primaryCategory": "Systems",
        "paradigms": [
            "Imperative"
        ],
        "domains": [
            "Systems Programming"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Ballerina",
        "year": 2017,
        "creator": "WSO2",
        "code": "import ballerina/io;\n\npublic function main() {\n    io:println(\"Hello, World!\");\n}",
        "desc": "Ballerina is a programming language created in 2017 by WSO2. It was designed for cloud and is known for its Object-Oriented paradigm(s). Ballerina has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Cloud Computing, Microservices.",
        "popularity": 10,
        "categories": [
            "Cloud",
            "Network Services"
        ],
        "primaryCategory": "Cloud",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Cloud Computing",
            "Microservices"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "cloud-languages.js"
    },
    {
        "name": "Chapel",
        "year": 2009,
        "creator": "Cray Inc.",
        "code": "writeln(\"Hello, World!\");",
        "desc": "Chapel is a programming language created in 2009 by Cray Inc.. It was designed for parallel and is known for its Parallel paradigm(s). Chapel has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as High Performance Computing, Scientific Computing.",
        "popularity": 8,
        "categories": [
            "Parallel",
            "High Performance"
        ],
        "primaryCategory": "Parallel",
        "paradigms": [
            "Parallel"
        ],
        "domains": [
            "High Performance Computing",
            "Scientific Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "parallel-languages.js"
    },
    {
        "name": "X10",
        "year": 2004,
        "creator": "IBM",
        "code": "public class Hello {\n    public static def main(args: Array[String]) {\n        Console.OUT.println(\"Hello, World!\");\n    }\n}",
        "desc": "X10 is a programming language created in 2004 by IBM. It was designed for parallel and is known for its Object-Oriented, Parallel paradigm(s). X10 has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as High Performance Computing.",
        "popularity": 5,
        "categories": [
            "Parallel",
            "High Performance"
        ],
        "primaryCategory": "Parallel",
        "paradigms": [
            "Object-Oriented",
            "Parallel"
        ],
        "domains": [
            "High Performance Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "parallel-languages.js"
    },
    {
        "name": "Fortress",
        "year": 2006,
        "creator": "Sun Microsystems",
        "code": "component provides Main\nexports Executable\n\nrun(args: Array[String]): Void =\n    println(\"Hello, World!\")",
        "desc": "Fortress is a programming language created in 2006 by Sun Microsystems. It was designed for parallel and is known for its Functional, Parallel paradigm(s). Fortress has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scientific Computing.",
        "popularity": 3,
        "categories": [
            "Parallel",
            "Scientific"
        ],
        "primaryCategory": "Parallel",
        "paradigms": [
            "Functional",
            "Parallel"
        ],
        "domains": [
            "Scientific Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "parallel-languages.js"
    },
    {
        "name": "SAS",
        "year": 1976,
        "creator": "SAS Institute",
        "code": "data _null_;\n   put 'Hello, World!';\nrun;",
        "desc": "SAS is a programming language created in 1976 by SAS Institute. It was designed for statistical and is known for its Procedural paradigm(s). SAS has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Statistics, Business Intelligence.",
        "popularity": 30,
        "categories": [
            "Statistical",
            "Business"
        ],
        "primaryCategory": "Statistical",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Statistics",
            "Business Intelligence"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "statistical-languages.js"
    },
    {
        "name": "SPSS",
        "year": 1968,
        "creator": "Norman Nie",
        "code": "STRING hello (A12).\nCOMPUTE hello = 'Hello, World!'.\nEXECUTE.",
        "desc": "SPSS is a programming language created in 1968 by Norman Nie. It was designed for statistical and is known for its Procedural paradigm(s). SPSS has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Statistics, Social Sciences.",
        "popularity": 25,
        "categories": [
            "Statistical",
            "Business"
        ],
        "primaryCategory": "Statistical",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Statistics",
            "Social Sciences"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "statistical-languages.js"
    },
    {
        "name": "Stata",
        "year": 1985,
        "creator": "StataCorp",
        "code": "display \"Hello, World!\"",
        "desc": "Stata is a programming language created in 1985 by StataCorp. It was designed for statistical and is known for its Procedural paradigm(s). Stata has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Statistics, Research.",
        "popularity": 20,
        "categories": [
            "Statistical",
            "Research"
        ],
        "primaryCategory": "Statistical",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Statistics",
            "Research"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "statistical-languages.js"
    },
    {
        "name": "Scratch",
        "year": 2007,
        "creator": "MIT Media Lab",
        "code": "when green flag clicked\nsay [Hello, World!]",
        "desc": "Scratch is a programming language created in 2007 by MIT Media Lab. It was designed for educational and is known for its Event-driven paradigm(s). Scratch has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Game Development.",
        "popularity": 30,
        "categories": [
            "Educational",
            "Visual"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Education",
            "Game Development"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Blockly",
        "year": 2012,
        "creator": "Google",
        "code": "// Visual block-based programming\n// Generates JavaScript code",
        "desc": "Blockly is a programming language created in 2012 by Google. It was designed for educational and is known for its Event-driven paradigm(s). Blockly has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Web Development.",
        "popularity": 20,
        "categories": [
            "Educational",
            "Visual"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Education",
            "Web Development"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Alice",
        "year": 1994,
        "creator": "Randy Pausch",
        "code": "// 3D programming environment\n// Visual drag-and-drop interface",
        "desc": "Alice is a programming language created in 1994 by Randy Pausch. It was designed for educational and is known for its Object-Oriented paradigm(s). Alice has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Animation.",
        "popularity": 12,
        "categories": [
            "Educational",
            "3D"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Education",
            "Animation"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Small Basic",
        "year": 2008,
        "creator": "Microsoft",
        "code": "TextWindow.WriteLine(\"Hello, World!\")",
        "desc": "Small Basic is a programming language created in 2008 by Microsoft. It was designed for educational and is known for its Procedural paradigm(s). Small Basic has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Windows.",
        "popularity": 10,
        "categories": [
            "Educational",
            "Beginner"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Education",
            "Windows"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Kodu",
        "year": 2009,
        "creator": "Microsoft",
        "code": "// Visual programming environment\n// When: Start\nSay: \"Hello, World!\"",
        "desc": "Kodu is a programming language created in 2009 by Microsoft. It was designed for educational and is known for its Event-driven paradigm(s). Kodu has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Game Development.",
        "popularity": 8,
        "categories": [
            "Educational",
            "Game Development"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Education",
            "Game Development"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Snap!",
        "year": 2011,
        "creator": "UC Berkeley",
        "code": "when green flag clicked\nsay [Hello, World!]",
        "desc": "Snap! is a programming language created in 2011 by UC Berkeley. It was designed for educational and is known for its Event-driven paradigm(s). Snap! has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Computer Science.",
        "popularity": 12,
        "categories": [
            "Educational",
            "Visual"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Education",
            "Computer Science"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Tynker",
        "year": 2013,
        "creator": "Tynker",
        "code": "// Visual block programming\n// When Start\nSay \"Hello, World!\"",
        "desc": "Tynker is a programming language created in 2013 by Tynker. It was designed for educational and is known for its Event-driven paradigm(s). Tynker has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Game Development.",
        "popularity": 10,
        "categories": [
            "Educational",
            "Visual"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Education",
            "Game Development"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Code.org",
        "year": 2013,
        "creator": "Code.org",
        "code": "// Block-based programming\n// When run\nprint \"Hello, World!\"",
        "desc": "Code.org is a programming language created in 2013 by Code.org. It was designed for educational and is known for its Event-driven paradigm(s). Code.org has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Computer Science.",
        "popularity": 25,
        "categories": [
            "Educational",
            "Visual"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Education",
            "Computer Science"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "MakeCode",
        "year": 2016,
        "creator": "Microsoft",
        "code": "// Microsoft MakeCode\n// On start\nbasic.showString(\"Hello, World!\")",
        "desc": "MakeCode is a programming language created in 2016 by Microsoft. It was designed for educational and is known for its Event-driven paradigm(s). MakeCode has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, IoT.",
        "popularity": 15,
        "categories": [
            "Educational",
            "IoT"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Education",
            "IoT"
        ],
        "difficulty": "Beginner",
        "typing": "Untyped",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Raku",
        "year": 2015,
        "creator": "Larry Wall",
        "code": "say \"Hello, World!\";",
        "desc": "Raku is a programming language created in 2015 by Larry Wall. It was designed for general purpose and is known for its Multi-paradigm paradigm(s). Raku has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development, Text Processing.",
        "popularity": 12,
        "categories": [
            "General Purpose",
            "Perl Family"
        ],
        "primaryCategory": "General Purpose",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development",
            "Text Processing"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "general-languages.js"
    },
    {
        "name": "Janet",
        "year": 2018,
        "creator": "Calvin Rose",
        "code": "(print \"Hello, World!\")",
        "desc": "Janet is a programming language created in 2018 by Calvin Rose. It was designed for functional and is known for its Functional, Imperative paradigm(s). Janet has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scripting, Embedded.",
        "popularity": 8,
        "categories": [
            "Functional",
            "Lisp-like"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional",
            "Imperative"
        ],
        "domains": [
            "Scripting",
            "Embedded"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Wren",
        "year": 2013,
        "creator": "Bob Nystrom",
        "code": "System.print(\"Hello, World!\")",
        "desc": "Wren is a programming language created in 2013 by Bob Nystrom. It was designed for scripting and is known for its Object-Oriented paradigm(s). Wren has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scripting, Embedded.",
        "popularity": 6,
        "categories": [
            "Scripting",
            "Object-Oriented"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Scripting",
            "Embedded"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Haxe",
        "year": 2005,
        "creator": "Nicolas Cannasse",
        "code": "trace(\"Hello, World!\");",
        "desc": "Haxe is a programming language created in 2005 by Nicolas Cannasse. It was designed for cross-platform and is known for its Object-Oriented paradigm(s). Haxe has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Game Development, Web Development.",
        "popularity": 15,
        "categories": [
            "Cross-platform",
            "Statically Typed"
        ],
        "primaryCategory": "Cross-platform",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Game Development",
            "Web Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "cross-platform-languages.js"
    },
    {
        "name": "Falcon",
        "year": 2003,
        "creator": "Giancarlo Niccolai",
        "code": "printl(\"Hello, World!\")",
        "desc": "Falcon is a programming language created in 2003 by Giancarlo Niccolai. It was designed for scripting and is known for its Multi-paradigm paradigm(s). Falcon has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scripting, Embedded.",
        "popularity": 5,
        "categories": [
            "Scripting",
            "Multi-paradigm"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Scripting",
            "Embedded"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Io",
        "year": 2002,
        "creator": "Steve Dekorte",
        "code": "\"Hello, World!\" println",
        "desc": "Io is a programming language created in 2002 by Steve Dekorte. It was designed for object-oriented and is known for its Object-Oriented paradigm(s). Io has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Scripting, Education.",
        "popularity": 4,
        "categories": [
            "Object-Oriented",
            "Prototype-based"
        ],
        "primaryCategory": "Object-Oriented",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Scripting",
            "Education"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "object-languages.js"
    },
    {
        "name": "Rebol",
        "year": 1997,
        "creator": "Carl Sassenrath",
        "code": "print \"Hello, World!\"",
        "desc": "Rebol is a programming language created in 1997 by Carl Sassenrath. It was designed for data exchange and is known for its Multi-paradigm paradigm(s). Rebol has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Data Exchange, Scripting.",
        "popularity": 6,
        "categories": [
            "Data Exchange",
            "Multi-paradigm"
        ],
        "primaryCategory": "Data Exchange",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Data Exchange",
            "Scripting"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "data-languages.js"
    },
    {
        "name": "Self",
        "year": 1987,
        "creator": "David Ungar",
        "code": "('Hello, World!' printLine)",
        "desc": "Self is a programming language created in 1987 by David Ungar. It was designed for object-oriented and is known for its Object-Oriented paradigm(s). Self has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Research, Education.",
        "popularity": 8,
        "categories": [
            "Object-Oriented",
            "Prototype-based"
        ],
        "primaryCategory": "Object-Oriented",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Research",
            "Education"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "object-languages.js"
    },
    {
        "name": "Smalltalk",
        "year": 1972,
        "creator": "Alan Kay",
        "code": "Transcript show: 'Hello, World!'; cr.",
        "desc": "Smalltalk is a programming language created in 1972 by Alan Kay. It was designed for object-oriented and is known for its Object-Oriented paradigm(s). Smalltalk has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Education, Research.",
        "popularity": 12,
        "categories": [
            "Object-Oriented",
            "Historical"
        ],
        "primaryCategory": "Object-Oriented",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Education",
            "Research"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "object-languages.js"
    },
    {
        "name": "Prolog",
        "year": 1972,
        "creator": "Alain Colmerauer",
        "code": "write('Hello, World!'), nl.",
        "desc": "Prolog is a programming language created in 1972 by Alain Colmerauer. It was designed for logic and is known for its Logic, Declarative paradigm(s). Prolog has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as AI, Natural Language Processing.",
        "popularity": 15,
        "categories": [
            "Logic",
            "AI"
        ],
        "primaryCategory": "Logic",
        "paradigms": [
            "Logic",
            "Declarative"
        ],
        "domains": [
            "AI",
            "Natural Language Processing"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "logic-languages.js"
    },
    {
        "name": "Q#",
        "year": 2017,
        "creator": "Microsoft",
        "code": "operation HelloWorld() : Unit {\n    Message(\"Hello, World!\");\n}",
        "desc": "Q# is a programming language created in 2017 by Microsoft. It was designed for quantum and is known for its Quantum paradigm(s). Q# has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Quantum Computing.",
        "popularity": 7,
        "categories": [
            "Quantum",
            "Domain-Specific"
        ],
        "primaryCategory": "Quantum",
        "paradigms": [
            "Quantum"
        ],
        "domains": [
            "Quantum Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "quantum-languages.js"
    },
    {
        "name": "Futhark",
        "year": 2016,
        "creator": "Troels Henriksen",
        "code": "let main =\n  putStrLn \"Hello, World!\"",
        "desc": "Futhark is a programming language created in 2016 by Troels Henriksen. It was designed for functional and is known for its Functional, Data-Parallel paradigm(s). Futhark has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as High Performance Computing.",
        "popularity": 4,
        "categories": [
            "Functional",
            "High Performance"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional",
            "Data-Parallel"
        ],
        "domains": [
            "High Performance Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Zsh",
        "year": 1990,
        "creator": "Paul Falstad",
        "code": "echo \"Hello, World!\"",
        "desc": "Zsh is a programming language created in 1990 by Paul Falstad. It was designed for scripting and is known for its Multi-paradigm paradigm(s). Zsh has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as System Administration, Automation.",
        "popularity": 55,
        "categories": [
            "Scripting",
            "Shell"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "System Administration",
            "Automation"
        ],
        "difficulty": "Beginner",
        "typing": "Mixed",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Apex",
        "year": 2007,
        "creator": "Salesforce",
        "code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.debug('Hello, World!');\n    }\n}",
        "desc": "Apex is a programming language created in 2007 by Salesforce. It was designed for enterprise and is known for its Object-Oriented paradigm(s). Apex has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Enterprise Software, Cloud Computing.",
        "popularity": 25,
        "categories": [
            "Enterprise",
            "Cloud"
        ],
        "primaryCategory": "Enterprise",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Enterprise Software",
            "Cloud Computing"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "enterprise-languages.js"
    },
    {
        "name": "Ceylon",
        "year": 2011,
        "creator": "Red Hat",
        "code": "void hello() {\n    print(\"Hello, World!\");\n}\n\nhello();",
        "desc": "Ceylon is a programming language created in 2011 by Red Hat. It was designed for jvm and is known for its Object-Oriented paradigm(s). Ceylon has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Enterprise Software, Web Development.",
        "popularity": 10,
        "categories": [
            "JVM",
            "Modern"
        ],
        "primaryCategory": "JVM",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Enterprise Software",
            "Web Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "jvm-languages.js"
    },
    {
        "name": "Hack",
        "year": 2014,
        "creator": "Facebook",
        "code": "<?hh\n\n<<__EntryPoint>>\nfunction main(): void {\n  echo \"Hello, World!\";\n}",
        "desc": "Hack is a programming language created in 2014 by Facebook. It was designed for web and is known for its Multi-paradigm paradigm(s). Hack has played a significant role in the evolution of programming, offering unique features and influencing many other languages. Today, it is used in domains such as Web Development, Server-side.",
        "popularity": 20,
        "categories": [
            "Web",
            "Modern"
        ],
        "primaryCategory": "Web",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "Web Development",
            "Server-side"
        ],
        "difficulty": "Intermediate",
        "typing": "Mixed",
        "sourceFile": "web-languages.js"
    },
    {
        "name": "Hare",
        "year": 2021,
        "creator": "Drew DeVault et al.",
        "code": "use fmt;\n\nexport fn main() void = {\n    const greetings = [\n        \"Hello, world!\",\n        \"¡Hola Mundo!\",\n        \"Γειά σου Κόσμε!\",\n        \"Привіт, світе!\",\n        \"こんにちは世界！\",\n    ];\n    for (let greeting .. greetings) {\n        fmt::println(greeting)!;\n    };\n};",
        "desc": "Hare is a systems programming language created in 2021 by Drew DeVault and contributors. Designed to be simple, stable, and robust, Hare features a static type system, manual memory management, and a minimal runtime. It is well-suited for writing operating systems, system tools, compilers, networking software, and other low-level, high-performance tasks. Hare emphasizes clarity and maintainability, making it a modern choice for systems programming. The project is developed by a team of maintainers and contributors, and aims to provide a reliable foundation for critical software. Learn more at harelang.org.",
        "popularity": 5,
        "categories": [
            "Systems",
            "Low-level"
        ],
        "primaryCategory": "Systems",
        "paradigms": [
            "Procedural",
            "Imperative"
        ],
        "domains": [
            "System Programming",
            "Operating Systems",
            "Networking"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Bosque",
        "year": 2019,
        "creator": "Microsoft Research (Mark Marron)",
        "code": "namespace NSMain;\nentity Main {\n  function main(): Int {\n    print(\"Hello, World!\");\n    return 0;\n  }\n}",
        "desc": "Bosque is an experimental, regularized programming language from Microsoft Research focused on eliminating sources of complexity such as loops, mutable state, and reference equality.",
        "popularity": 1,
        "categories": ["Experimental", "General Purpose"],
        "primaryCategory": "Experimental",
        "paradigms": ["Functional", "Imperative"],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "experimental-languages.js"
    },
    {
        "name": "Dark",
        "year": 2019,
        "creator": "Paul Biggar, Ellen Chisa",
        "code": "let main = \"Hello, World!\"",
        "desc": "Dark is a holistic programming language, editor, and infrastructure for building backend web services with minimal ceremony.",
        "popularity": 1,
        "categories": ["Experimental", "Web"],
        "primaryCategory": "Experimental",
        "paradigms": ["Functional", "Event-driven"],
        "domains": ["Web Development"],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "experimental-languages.js"
    },
    {
        "name": "Red/System",
        "year": 2011,
        "creator": "Nenad Rakocevic",
        "code": "print \"Hello, World!\"",
        "desc": "Red/System is a low-level, C-like language that serves as the system programming subset of Red, designed for performance and direct hardware access.",
        "popularity": 2,
        "categories": ["Systems", "Low-level"],
        "primaryCategory": "Systems",
        "paradigms": ["Procedural"],
        "domains": ["System Programming"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Whiley",
        "year": 2009,
        "creator": "David Pearce",
        "code": "method main(System.Console console):\n    console.out.println(\"Hello, World!\");",
        "desc": "Whiley is a programming language designed for verifying programs through its flow-sensitive type system and support for formal specification.",
        "popularity": 1,
        "categories": ["Experimental", "Verification"],
        "primaryCategory": "Experimental",
        "paradigms": ["Imperative", "Functional"],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "experimental-languages.js"
    },
    {
        "name": "Idris 2",
        "year": 2020,
        "creator": "Edwin Brady",
        "code": "main : IO ()\nmain = putStrLn \"Hello, World!\"",
        "desc": "Idris 2 is a general-purpose functional programming language with full dependent types, a successor to Idris with a new core and improved performance.",
        "popularity": 1,
        "categories": ["Functional", "Dependent Types"],
        "primaryCategory": "Functional",
        "paradigms": ["Functional"],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Vyper",
        "year": 2017,
        "creator": "Ethereum Foundation",
        "code": "@public\ndef main():\n    print(\"Hello, World!\")",
        "desc": "Vyper is a contract-oriented, pythonic programming language targeting the Ethereum Virtual Machine (EVM), designed to be simple and secure for smart contract development.",
        "popularity": 1,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Procedural"],
        "domains": ["Smart Contracts"],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "ALGOL W",
        "year": 1966,
        "creator": "Niklaus Wirth",
        "code": "begin\n  write(\"Hello, World!\")\nend",
        "desc": "ALGOL W is a programming language designed by Niklaus Wirth as a successor to ALGOL 60. It was the precursor to Pascal and introduced several important concepts.",
        "popularity": 3,
        "categories": ["Legacy", "Historical"],
        "primaryCategory": "Legacy",
        "paradigms": ["Procedural"],
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
        "categories": ["Legacy", "Historical"],
        "primaryCategory": "Legacy",
        "paradigms": ["Object-Oriented"],
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
        "categories": ["Legacy", "Historical"],
        "primaryCategory": "Legacy",
        "paradigms": ["Object-Oriented"],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    },
    {
        "name": "Component Pascal",
        "year": 1997,
        "creator": "Oberon microsystems AG",
        "code": "MODULE Hello;\nIMPORT Out;\nBEGIN\n  Out.String(\"Hello, World!\");\n  Out.Ln\nEND Hello.",
        "desc": "Component Pascal is a programming language in the Pascal/Modula/Oberon family, designed for component-based software engineering and rapid application development.",
        "popularity": 2,
        "categories": ["Legacy", "Component-based"],
        "primaryCategory": "Legacy",
        "paradigms": ["Object-Oriented"],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "legacy-languages.js"
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = languages;
}
