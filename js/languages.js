// Consolidated Programming Languages Collection
// Total Languages: 242
// Generated: 2025-01-27T12:00:00.000Z

var languages = [
    {
        "name": "ActionScript",
        "year": 1998,
        "creator": "Gary Grossman",
        "code": "trace(\"Hello, World!\");",
        "desc": "ActionScript is an object-oriented programming language originally developed by Macromedia Inc. (later acquired by Adobe Systems). Used primarily for Adobe Flash applications.",
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
        "desc": "Ada is a structured, statically typed, imperative, and object-oriented high-level programming language, extended from Pascal and other languages. Named after Ada Lovelace.",
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
        "desc": "Agda is a dependently typed functional programming language based on intuitionistic type theory. Developed by Ulf Norell.",
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
        "desc": "ALGOL is a family of imperative computer programming languages originally developed in 1958. It was influential in the design of many later languages.",
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
        "desc": "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed by Google.",
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
        "desc": "Ansible is an open-source software provisioning, configuration management, and application-deployment tool. Created by Michael DeHaan.",
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
        "desc": "AsciiDoc is a text document format for writing notes, documentation, articles, books, ebooks, slideshows, web pages, man pages and blogs.",
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
        "year": 1949,
        "creator": "Various",
        "code": ".section .data\n    hello: .ascii \"Hello, World!\\n\"\n.section .text\n    .global _start\n_start:\n    mov $4, %eax\n    mov $1, %ebx\n    mov $hello, %ecx\n    int $0x80",
        "desc": "Assembly language provides a human-readable representation of machine code instructions specific to the x86 processor architecture that has dominated personal computing.",
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
        "desc": "AWK is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool. Created by Alfred Aho, Peter Weinberger, and Brian Kernighan.",
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
        "desc": "B is a programming language developed at Bell Labs circa 1969 by Ken Thompson and Dennis Ritchie. It was the predecessor to the C programming language.",
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
        "desc": "Bash (Bourne Again Shell) is a command-line shell and scripting language developed by Brian Fox for the GNU Project in 1989. As an enhanced replacement for the original Bourne shell.",
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
        "desc": "BASIC is a family of general-purpose, high-level programming languages whose design philosophy emphasizes ease of use. Created by John G. Kemeny and Thomas E. Kurtz.",
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
        "desc": "BCPL (Basic Combined Programming Language) is a procedural, imperative, and structured programming language designed by Martin Richards of the University of Cambridge in 1966.",
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
        "code": "\"!dlroW ,olleH\">:#,_@",
        "desc": "Befunge is a stack-based, reflective, esoteric programming language created by Chris Pressey in 1993. It's notable for being two-dimensional.",
        "popularity": 10,
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
        "name": "Brainfuck",
        "year": 1993,
        "creator": "Urban Müller",
        "code": "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.",
        "desc": "Brainfuck is an esoteric programming language created by Urban Müller. It's designed to challenge and amuse programmers with its extreme minimalism.",
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
        "desc": "C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs between 1969 and 1973. Often called the mother of modern programming languages, C provides low-level access to memory and system resources.",
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
        "desc": "C# is a modern, object-oriented programming language developed by Microsoft as part of its .NET framework. Led by Anders Hejlsberg, C# was designed to combine the computing power of C++ with the programming ease of Visual Basic.",
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
        "desc": "C++ is an extension of the C programming language, developed by Bjarne Stroustrup at Bell Labs starting in 1979. It adds object-oriented programming capabilities while maintaining the efficiency and flexibility of C.",
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
        "desc": "Carbon is an experimental programming language being developed by Google as a potential successor to C++. Designed to provide smooth interoperability with existing C++ code.",
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
        "desc": "Cat is a functional stack-based programming language inspired by Joy. Created by Christopher Diggins with a focus on type safety.",
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
        "desc": "Chef is a configuration management tool written in Ruby and Erlang. Created by Adam Jacob, it uses a pure-Ruby, domain-specific language for writing system configuration recipes.",
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
        "desc": "Clean is a purely functional programming language developed by Rinus Plasmeijer at Radboud University. It features uniqueness typing for efficient memory management and is designed for developing real-world applications with functional programming.",
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
        "desc": "Clojure is a dynamic, general-purpose programming language that combines the approachability of a scripting language with an efficient infrastructure for multithreaded programming. Created by Rich Hickey.",
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
        "desc": "CMake is a cross-platform free and open-source software tool for managing the build process of software using a compiler-independent method.",
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
        "desc": "COBOL is a compiled English-like computer programming language designed for business use. Developed by Grace Hopper and others.",
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
        "desc": "CoffeeScript is a programming language that transcompiles to JavaScript. Created by Jeremy Ashkenas.",
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
        "desc": "Coq is an interactive theorem prover first released in 1989. It allows for expressing mathematical assertions and mechanically checks proofs.",
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
        "desc": "Creole is a lightweight markup language aimed at being a common markup language for wikis, enabling and simplifying the transfer of content between different wiki engines.",
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
        "desc": "Crystal is a general-purpose, object-oriented programming language designed by Ary Borenszweig with syntax heavily inspired by Ruby but with static type checking.",
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
        "desc": "C shell (csh) is a Unix shell created by Bill Joy at the University of California, Berkeley. It was designed to provide a more C-like syntax for shell scripting.",
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
        "desc": "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and formatting of documents written in HTML or XML.",
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
        "desc": "Cypher is a declarative graph query language developed by Neo4j for querying graph databases. It uses ASCII-art syntax to represent graph patterns and is designed to be intuitive for describing graph relationships.",
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
        "desc": "D is a general-purpose programming language with static typing, systems-level access, and C-like syntax. Developed by Walter Bright.",
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
        "desc": "Dart is a client-optimized programming language developed by Google for fast apps on any platform. It's the primary language for Flutter development.",
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
        "desc": "Dash (Debian Almquist shell) is a POSIX-compliant Unix shell that aims to be as small as possible. Developed by Herbert Xu based on the Almquist shell.",
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
        "desc": "Delphi is a general-purpose programming language and a software product that uses the Delphi dialect of the Object Pascal programming language. Developed by Borland.",
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
        "desc": "Dockerfile is a text document that contains commands to assemble a Docker image. Created as part of Docker by Solomon Hykes and the Docker team.",
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
        "desc": "Eiffel is an object-oriented programming language designed by Bertrand Meyer and Eiffel Software. Known for its design by contract approach.",
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
        "desc": "Elixir is a dynamic, functional language designed for building maintainable and scalable applications. Created by José Valim, Elixir leverages the Erlang Virtual Machine.",
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
        "desc": "Elm is a domain-specific programming language for declaratively creating web browser-based graphical user interfaces. Created by Evan Czaplicki.",
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
        "desc": "Erlang is a programming language designed for building massively scalable soft real-time systems with requirements for high availability. Developed by Joe Armstrong at Ericsson.",
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
        "desc": "Expect is an extension to the Tcl scripting language written by Don Libes. It is used to automate interactions with programs that expose a text terminal interface.",
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
        "desc": "F# is a functional-first programming language that makes it easy to write correct and maintainable code. Developed by Don Syme at Microsoft Research as part of the .NET ecosystem.",
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
        "desc": "Factor is a stack-based, concatenative programming language created by Slava Pestov. It features a rich library of combinators for manipulating the stack.",
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
        "desc": "Fennel is a Lisp that compiles to Lua, combining the elegance of Lisp syntax with Lua's simplicity and performance. Created by Phil Hagelberg, it's designed for scripting and embedding in applications that use Lua.",
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
        "desc": "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart programming language.",
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
        "desc": "Fortran is a general-purpose, compiled imperative programming language especially suited to numeric computation and scientific computing. Developed by John Backus at IBM.",
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
        "name": "FORTRAN",
        "year": 1957,
        "creator": "John Backus",
        "code": "program hello\n  print *, 'Hello, World!'\nend program hello",
        "desc": "Fortran is a general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing. Developed by John Backus at IBM.",
        "popularity": 35,
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
        "name": "GDScript",
        "year": 2014,
        "creator": "Juan Linietsky",
        "code": "extends Node\n\nfunc _ready():\n    print(\"Hello, World!\")",
        "desc": "GDScript is a high-level, dynamically typed programming language used to create content in the Godot game engine. Created by Juan Linietsky and Ariel Manzur.",
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
        "desc": "Gleam is a friendly language for building type-safe systems that scale. Created by Louis Pilfold, it compiles to Erlang and JavaScript.",
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
        "desc": "GLSL (OpenGL Shading Language) is a high-level shading language with a syntax based on the C programming language.",
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
        "desc": "Gnuplot is a portable command-line driven graphing utility originally created by Colin Kelley and Thomas Williams.",
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
        "desc": "Go, also known as Golang, is a statically typed, compiled programming language developed at Google. Designed for simplicity, efficiency, and excellent support for concurrent programming.",
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
        "desc": "Gradle is an open-source build automation tool focused on flexibility and performance. Created by Hans Dockter, it uses a Groovy-based domain-specific language.",
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
        "desc": "Grain is a strongly-typed functional programming language built for the modern web. Created by Philip Blair and the Grain team.",
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
        "desc": "GraphQL is a query language and runtime for APIs developed by Facebook. It provides a complete description of the data in an API and gives clients the power to ask for exactly what they need.",
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
        "desc": "Groovy is an object-oriented programming language for the Java platform. Created by James Strachan and developed by Guillaume Laforge.",
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
        "desc": "Haskell is a standardised, purely functional programming language with lazy evaluation and strong static typing. Named after logician Haskell Curry, it was developed by a committee of researchers.",
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
        "desc": "HLSL (High-Level Shading Language) is a proprietary shading language developed by Microsoft for use with the Microsoft Direct3D API.",
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
        "desc": "HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. Developed by Tim Berners-Lee at CERN in 1990.",
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
        "desc": "Hy is a Lisp dialect that compiles to Python's abstract syntax tree. Created by Paul Tagliamonte, it allows developers to write Python programs using Lisp syntax whilst maintaining full access to Python libraries.",
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
        "desc": "Icon is a high-level, general-purpose programming language with a large repertoire of features for processing and presenting symbolic data. Created by Ralph Griswold.",
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
        "desc": "Idris is a purely functional programming language with dependent types, designed for type-driven development. Created by Edwin Brady, it allows expressing precise program specifications in types and proving program correctness.",
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
        "desc": "Inko is a language for building concurrent software with confidence. Created by Yorick Peterse with a focus on safety and performance.",
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
        "desc": "INTERCAL (Compiler Language With No Pronounceable Acronym) is an esoteric programming language created by Don Woods and James Lyon in 1972 as a parody of programming languages.",
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
        "desc": "Ionic is a complete open-source SDK for hybrid mobile app development created by Max Lynch, Ben Sperry, and Adam Bradley of Drifty Co.",
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
        "desc": "Isabelle is a generic proof assistant for Higher-Order Logic (HOL). Developed by Lawrence Paulson at Cambridge University.",
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
        "desc": "J is an array programming language developed by Kenneth Iverson and Roger Hui. It is a successor to APL.",
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
        "desc": "JAI is a programming language designed by Jonathan Blow for high-performance programming, particularly game development. Still in development, aims to provide control of C with modern features.",
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
        "desc": "Java is a class-based, object-oriented programming language designed by James Gosling at Sun Microsystems in 1995. Built on the principle of 'write once, run anywhere', Java compiles to bytecode that runs on the Java Virtual Machine.",
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
        "desc": "JavaScript is a dynamic, interpreted programming language that was originally designed to add interactivity to web pages. Created by Brendan Eich at Netscape in 1995, it has evolved into one of the most versatile languages in the world.",
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
        "desc": "Joy is a purely functional programming language based on composition of functions rather than lambda calculus. Created by Manfred von Thun.",
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
        "desc": "JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format derived from JavaScript object syntax. Specified by Douglas Crockford in 2001.",
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
        "desc": "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. Developed by Facebook for React.",
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
        "desc": "Julia is a high-level, high-performance dynamic programming language for technical computing. Developed by Jeff Bezanson, Stefan Karpinski, Viral Shah, and Alan Edelman at MIT.",
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
        "desc": "K is a proprietary array processing language developed by Arthur Whitney and commercialized by Kx Systems.",
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
        "desc": "Kitten is a statically typed, stack-based functional programming language designed by Jon Purdy. It aims to be a practical concatenative language.",
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
        "desc": "Koka is a functional programming language with effect types and handlers. Created by Daan Leijen at Microsoft Research.",
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
        "desc": "Kotlin is a modern, statically typed programming language developed by JetBrains that runs on the Java Virtual Machine and can also be compiled to JavaScript or native code.",
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
        "desc": "KornShell (ksh) is a Unix shell developed by David Korn at Bell Labs. It's backward-compatible with the Bourne shell and includes many features of the C shell.",
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
        "desc": "LaTeX is a document preparation system based on the TeX typesetting system. Developed by Leslie Lamport, it's widely used for academic and technical documents.",
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
        "desc": "Lean is a theorem prover and programming language developed by Leonardo de Moura at Microsoft Research.",
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
        "desc": "Less is a dynamic preprocessor style sheet language that can be compiled into CSS. Created by Alexis Sellier.",
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
        "desc": "Lisp is one of the oldest high-level programming languages, created by John McCarthy at MIT in 1958. Originally developed for artificial intelligence research.",
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
        "desc": "Logo is an educational programming language, designed in 1967 by Wally Feurzeig, Seymour Papert, and Cynthia Solomon. Known for its turtle graphics.",
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
        "desc": "LOLCODE is an esoteric programming language inspired by lolspeak, the language expressed in examples of the lolcat Internet meme. Created by Adam Lindsay.",
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
        "desc": "Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. Created by Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes.",
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
        "desc": "Make is a build automation tool that automatically builds executable programs and libraries from source code by reading files called Makefiles. Created by Stuart Feldman at Bell Labs.",
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
        "desc": "Malbolge is a public domain esoteric programming language invented by Ben Olmstead in 1998, designed to be as difficult to program in as possible.",
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
        "desc": "Maple is a symbolic and numeric computing environment as well as a multi-paradigm programming language. Developed by the Symbolic Computation Group at the University of Waterloo.",
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
        "desc": "Markdown is a lightweight markup language with plain-text-formatting syntax. Created by John Gruber in collaboration with Aaron Swartz.",
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
        "desc": "Mathematica is a modern technical computing system spanning most areas of technical computing. Developed by Stephen Wolfram and his team at Wolfram Research.",
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
        "desc": "MATLAB is a proprietary multi-paradigm programming language and numeric computing environment developed by MathWorks. Originally created by Cleve Moler for matrix computations.",
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
        "desc": "Maxima is a computer algebra system based on a 1982 version of Macsyma, developed by William Schelter. It's a system for the manipulation of symbolic and numerical expressions.",
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
        "desc": "Miranda is a purely functional programming language designed by David Turner. It influenced the development of Haskell and features lazy evaluation, strong typing, and a clean mathematical syntax for functional programming.",
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
        "desc": "ML (Meta Language) is a functional programming language developed by Robin Milner and others at the University of Edinburgh in the early 1970s.",
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
        "desc": "Modula-2 is a programming language developed between 1977 and 1985 by Niklaus Wirth at ETH Zurich as a successor to Pascal.",
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
        "desc": "Mojo is a new programming language designed for AI development that combines Python's usability with C's performance. Created by Chris Lattner at Modular, it aims to be a superset of Python with systems programming capabilities.",
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
        "desc": "N1QL (pronounced 'nickel') is a SQL-like query language developed by Couchbase for querying JSON documents in NoSQL databases. It extends SQL to work with JSON data structures and nested documents.",
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
        "desc": "Nim is a statically typed compiled systems programming language that combines successful concepts from mature languages like Python, Ada, and Modula.",
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
        "desc": "Nushell is a new type of shell that takes a modern, structured approach to your command line. Created by Jonathan Turner, it treats data as structured rather than text.",
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
        "desc": "Oberon is a general-purpose programming language first published in 1987 by Niklaus Wirth and the latest member of the Wirth family of languages.",
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
        "desc": "Objective-C is a general-purpose, object-oriented programming language that adds Smalltalk-style messaging to the C programming language. Created by Brad Cox and Tom Love.",
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
        "desc": "OCaml is an industrial-strength programming language supporting functional, imperative, and object-oriented styles. Developed by Xavier Leroy and others at INRIA.",
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
        "desc": "GNU Octave is a high-level interpreted language primarily intended for numerical computations. Created by John Eaton as a free alternative to MATLAB.",
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
        "desc": "Odin is a general-purpose programming language designed as an alternative to C with modern features and better ergonomics. Created by Ginger Bill.",
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
        "desc": "Ook! is an esoteric programming language designed by David Morgan-Mar, where the only syntax elements are 'Ook.', 'Ook?', and 'Ook!'.",
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
        "desc": "Org-mode is a document editing, formatting, and organizing mode designed for notes, planning, and authoring within the free software text editor Emacs.",
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
        "desc": "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices.",
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
        "desc": "PDP-11 Assembly language for the influential PDP-11 minicomputer series from Digital Equipment Corporation.",
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
        "desc": "Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages. Created by Larry Wall in 1987.",
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
        "desc": "PhoneGap is a mobile development framework originally created by Nitobi. It enables software programmers to build applications for mobile devices using CSS, HTML5, and JavaScript.",
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
        "desc": "PHP is a server-side scripting language designed for web development but also used for general-purpose programming. Created by Rasmus Lerdorf in 1995.",
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
        "desc": "Piet is an esoteric programming language designed by David Morgan-Mar where programs are represented as abstract paintings using colors to determine program flow.",
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
        "desc": "PL/I is a procedural, imperative computer programming language developed and published by IBM. Designed to combine features of scientific and commercial programming.",
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
        "desc": "Pony is an open-source, object-oriented, actor-model, capabilities-secure, high-performance programming language. Created by Sylvan Clebsch.",
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
        "desc": "PostScript is a page description language developed by John Warnock and Charles Geschke at Adobe Systems. It's used primarily for printing and displaying documents.",
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
        "desc": "PowerShell is a task automation and configuration management framework from Microsoft, consisting of a command-line shell and scripting language built on the .NET Framework.",
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
        "desc": "Puppet is a software configuration management tool developed by Luke Kanies and his company Puppet Labs. It runs on many Unix-like systems as well as on Microsoft Windows.",
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
        "desc": "PureScript is a strongly-typed, purely-functional programming language that compiles to JavaScript. Created by Phil Freeman.",
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
        "desc": "Python is a high-level, interpreted programming language known for its clean, readable syntax and philosophy of code readability. Created by Guido van Rossum and first released in 1991, Python emphasises simplicity and productivity.",
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
        "desc": "Q is a programming language for array processing, developed by Arthur Whitney. It is the query language for kdb+.",
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
        "desc": "R is a programming language and environment specifically designed for statistical computing and graphics. Developed by Ross Ihaka and Robert Gentleman at the University of Auckland.",
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
        "desc": "Racket is a general-purpose programming language and an ecosystem for language-oriented programming. Originally developed as PLT Scheme, it emphasises language extensibility and creating domain-specific languages.",
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
        "desc": "React is a JavaScript library for building user interfaces, particularly web applications. Developed by Facebook.",
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
        "desc": "React Native is an open-source mobile application framework created by Facebook for developing native mobile apps using React and JavaScript.",
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
        "desc": "Red is a programming language inspired by Rebol, designed to be a full-stack language for systems programming to scripting. Created by Nenad Rakocevic, it features a compact syntax and aims to reduce software complexity.",
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
        "desc": "Regular expressions are a sequence of characters that define a search pattern. The concept was formalized by mathematician Stephen Cole Kleene in 1951.",
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
        "desc": "Ren'Py is a visual novel engine that helps you use words, images, and sounds to tell interactive stories that run on computers and mobile devices.",
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
        "desc": "reStructuredText is a file format for textual data used primarily in the Python programming language community for technical documentation.",
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
        "desc": "Rexx (Restructured Extended Executor) is an interpreted programming language developed at IBM by Mike Cowlishaw. Designed to be a macro and scripting language.",
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
        "desc": "Roc is a functional programming language designed for building reliable software. Created by Richard Feldman with a focus on simplicity and performance.",
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
        "desc": "Ruby is a dynamic, object-oriented programming language created by Yukihiro Matsumoto (Matz) in Japan with the goal of making programming more enjoyable and productive.",
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
        "desc": "Rust is a systems programming language that focuses on speed, memory safety, and parallelism without requiring a garbage collector. Originally developed by Graydon Hoare at Mozilla Research.",
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
        "desc": "SageMath is a free open-source mathematics software system licensed under the GPL. Created by William Stein, it builds on top of many existing open-source packages.",
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
        "desc": "SaltStack is a Python-based open-source configuration management software and remote execution engine. Created by Thomas Hatch.",
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
        "desc": "Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS. Created by Hampton Catlin.",
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
        "desc": "Scala is a modern multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way. Created by Martin Odersky.",
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
        "desc": "Scheme is a minimalist dialect of Lisp developed by Guy Lewis Steele Jr. and Gerald Jay Sussman at MIT in the 1970s. Known for its elegant simplicity and mathematical foundations.",
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
        "desc": "sed (stream editor) is a Unix utility that parses and transforms text, using a simple, compact programming language. Created by Lee McMahon at Bell Labs.",
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
        "desc": "The Shakespeare Programming Language (SPL) is an esoteric programming language designed by Karl Hasselström and Jon Åslund where programs look like Shakespearean plays.",
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
        "desc": "SNOBOL is a series of computer programming languages developed between 1962 and 1967 at AT&T Bell Laboratories by David J. Farber, Ralph E. Griswold and Ivan P. Polonsky.",
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
        "desc": "SPARQL is a query language and protocol developed by the W3C for querying RDF (Resource Description Framework) data. It's the standard query language for the Semantic Web and linked data applications.",
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
        "desc": "SPICE (Simulation Program with Integrated Circuit Emphasis) is a general-purpose analog electronic circuit simulator developed at UC Berkeley.",
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
        "desc": "SQL (Structured Query Language) is a domain-specific language designed for managing and manipulating relational databases. Developed by Donald Chamberlin and Raymond Boyce at IBM in the 1970s.",
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
        "desc": "Svelte is a radical new approach to building user interfaces. Created by Rich Harris.",
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
        "desc": "Swift is a powerful and intuitive programming language created by Apple for developing applications across all Apple platforms including iOS, macOS, watchOS, and tvOS.",
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
        "desc": "SystemVerilog is a unified hardware description and verification language based on extensions to Verilog. Developed by Accellera Systems Initiative.",
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
        "desc": "Tcl (Tool Command Language) is a high-level, general-purpose, interpreted, dynamic programming language. Created by John Ousterhout at UC Berkeley.",
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
        "desc": "Tcsh is a Unix shell based on and compatible with the C shell (csh). It was originally developed by Ken Greer at Carnegie Mellon University.",
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
        "desc": "Terraform is an open-source infrastructure as code software tool created by HashiCorp. It enables users to define and provision data center infrastructure using a declarative configuration language.",
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
        "desc": "Textile is a lightweight markup language that uses a text formatting syntax to convert plain text into structured HTML or XHTML.",
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
        "desc": "Titanium SDK is an open-source framework that allows the creation of native mobile apps on platforms including iOS, Android, and Windows UWP from a single JavaScript codebase.",
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
        "desc": "TOML (Tom's Obvious, Minimal Language) is a data serialisation language designed to be a minimal configuration file format. Created by Tom Preston-Werner.",
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
        "desc": "TypeScript is a strongly typed superset of JavaScript developed by Microsoft and led by Anders Hejlsberg. It adds static type definitions to JavaScript.",
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
        "desc": "Unison is a modern, statically-typed purely functional language with unique properties: it's content-addressed and has no builds. Created by Paul Chiusano.",
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
        "desc": "UnityScript was a JavaScript-like language used in the Unity game engine. It has been deprecated in favor of C#.",
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
        "desc": "V is a simple, fast, safe, compiled programming language designed for developing maintainable software. Created by Alexander Medvednikov.",
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
        "desc": "Vagrant is an open-source software product for building and maintaining portable virtual software development environments. Created by Mitchell Hashimoto.",
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
        "desc": "Verilog is a hardware description language used to model electronic systems. Created by Phil Moorby at Gateway Design Automation.",
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
        "desc": "VHDL (VHSIC Hardware Description Language) is a hardware description language used in electronic design automation to describe digital and mixed-signal systems.",
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
        "desc": "Visual Basic is a third-generation event-driven programming language from Microsoft known for its Component Object Model (COM) programming model.",
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
        "desc": "Vue.js is a progressive JavaScript framework for building user interfaces. Created by Evan You.",
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
        "desc": "WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Designed as a portable compilation target for programming languages.",
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
        "desc": "Whitespace is an esoteric programming language developed by Edwin Brady and Chris Morris where only whitespace characters have meaning.",
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
        "desc": "WikiText is a lightweight markup language used to write pages in wiki websites. The syntax was originally developed for the first wiki software, WikiWikiWeb.",
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
        "desc": "Xamarin is a Microsoft-owned San Francisco-based software company founded by Nat Friedman and Miguel de Icaza that provides commercial software development tools.",
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
        "desc": "XML (eXtensible Markup Language) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",
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
        "desc": "Xonsh is a Python-powered, cross-platform, Unix-gazing shell language and command prompt. Created by Anthony Scopatz, it combines Python with shell commands.",
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
        "desc": "XPath (XML Path Language) is a query language for selecting nodes from an XML document. Developed by the W3C as part of the XSLT standard.",
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
        "desc": "XQuery is a query and functional programming language that queries and transforms collections of structured and unstructured data, usually in the form of XML.",
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
        "desc": "XSLT (Extensible Stylesheet Language Transformations) is a language for transforming XML documents into other XML documents, HTML, or other formats.",
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
        "desc": "YAML (YAML Ain't Markup Language) is a human-readable data serialisation standard commonly used for configuration files and data exchange between applications.",
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
        "desc": "Zig is a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software. Created by Andrew Kelley.",
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
        "desc": "Deno is a modern runtime for JavaScript and TypeScript that uses V8 and is built in Rust. Created by Ryan Dahl, the original creator of Node.js, it focuses on security and developer experience.",
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
        "desc": "Bun is a fast all-in-one JavaScript runtime built from scratch to serve the modern JavaScript ecosystem. Created by Jarred Sumner, it includes a bundler, test runner, and package manager.",
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
        "desc": "Bend is a massively parallel, high-level programming language that compiles to HVM (High-order Virtual Machine). Created by Victor Taelin, it's designed to run on GPUs and multi-core CPUs with automatic parallelization.",
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
        "desc": "ALGOL 60 was a major revision of ALGOL 58, introducing block structure and lexical scoping. It became the foundation for many modern programming languages.",
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
        "desc": "ALGOL 68 was a much more complex language than ALGOL 60, introducing many advanced features like user-defined data types and parallel processing constructs.",
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
        "desc": "APL (A Programming Language) is an array programming language based on a notation invented by Kenneth E. Iverson. Known for its mathematical symbols and concise expressions.",
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
        "desc": "AutoHotkey is a free, open-source scripting language for Windows that allows users to easily create small to complex scripts for all kinds of tasks.",
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
        "desc": "AutoLISP is a dialect of the LISP programming language built specifically for use with the full version of AutoCAD and its derivatives.",
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
        "desc": "Batch is a scripting language for DOS and Windows command line. It consists of a series of commands to be executed by the command-line interpreter.",
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
        "desc": "BBC BASIC is a version of the BASIC programming language released in 1981 as the programming language for the BBC Micro and later for the Acorn Archimedes.",
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
        "desc": "Boo is an object-oriented, statically typed, general-purpose programming language that seeks to make use of the Common Language Infrastructure's support for Unicode, internationalization, and web applications.",
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
        "desc": "Clipper is a programming language and compiler that was very popular in the DOS era for developing database applications. It was originally a dBASE III compiler.",
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
        "desc": "CORAL 66 was a programming language developed for real-time embedded systems, particularly used in military and aerospace applications in the UK.",
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
        "desc": "CPL (Combined Programming Language) was a multi-paradigm programming language developed in the early 1960s. It was a precursor to BCPL and influenced the development of C.",
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
        "desc": "dBASE was one of the first database management systems for microcomputers and the dBASE programming language was widely used for business applications.",
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
        "desc": "Dylan is a multi-paradigm programming language that includes support for functional and object-oriented programming. Originally developed by Apple Computer.",
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
        "desc": "Euphoria is a programming language created by Robert Craig of Rapid Deployment Software in Toronto. It is simple, flexible, and easy to learn.",
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
        "code": ": HELLO ( -- ) .\" Hello, World!\" CR ;\nHELLO",
        "desc": "Forth is a stack-based, extensible programming language without type checking. It was created by Charles H. Moore in the early 1970s.",
        "popularity": 12,
        "categories": [
            "Stack-based",
            "Embedded"
        ],
        "primaryCategory": "Stack-based",
        "paradigms": [
            "Stack-based",
            "Concatenative"
        ],
        "domains": [
            "Embedded Systems",
            "Real-time Systems"
        ],
        "difficulty": "Advanced",
        "typing": "Untyped",
        "sourceFile": "embedded-languages.js"
    },
    {
        "name": "FoxPro",
        "year": 1984,
        "creator": "Fox Software",
        "code": "? \"Hello, World!\"",
        "desc": "FoxPro was a text-based procedurally oriented programming language and database management system originally published by Fox Software and later by Microsoft.",
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
        "desc": "GW-BASIC was a dialect of the BASIC programming language developed by Microsoft for MS-DOS. It was bundled with MS-DOS operating systems.",
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
        "desc": "HyperTalk is a high-level, procedural programming language created in 1987 by Dan Winkler and used in conjunction with Apple's HyperCard hypermedia program.",
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
        "code": "[ Main;\n  print \"Hello, World!^\";\n];",
        "desc": "Inform is a programming language and design system for interactive fiction originally created by Graham Nelson in 1993.",
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
        "desc": "JOSS (JOHNNIAC Open Shop System) was one of the very first interactive, time-sharing programming languages. Developed at RAND Corporation.",
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
        "desc": "The Korn shell (ksh) is a Unix shell which was developed by David Korn at Bell Labs in the early 1980s and announced at USENIX in 1983.",
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
        "code": "// Visual programming - displays \"Hello, World!\" in a string indicator",
        "desc": "LabVIEW is a system-design platform and development environment for a visual programming language from National Instruments.",
        "popularity": 20,
        "categories": [
            "Visual Programming",
            "Engineering"
        ],
        "primaryCategory": "Visual Programming",
        "paradigms": [
            "Visual Programming",
            "Dataflow"
        ],
        "domains": [
            "Engineering",
            "Scientific Computing",
            "Instrumentation"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "visual-languages.js"
    },
    {
        "name": "Lingo",
        "year": 1988,
        "creator": "John H. Thompson",
        "code": "put \"Hello, World!\"",
        "desc": "Lingo is a verbose object-oriented (OO) scripting language developed by John H. Thompson for use in Adobe Director (formerly Macromedia Director).",
        "popularity": 5,
        "categories": [
            "Legacy",
            "Multimedia"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Multimedia",
            "Interactive Media"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "multimedia-languages.js"
    },
    {
        "name": "LiveCode",
        "year": 1993,
        "creator": "Scott Raney",
        "code": "answer \"Hello, World!\"",
        "desc": "LiveCode is a cross-platform rapid application development runtime system inspired by HyperCard. Originally called MetaCard, then Revolution.",
        "popularity": 12,
        "categories": [
            "RAD",
            "Cross-platform"
        ],
        "primaryCategory": "RAD",
        "paradigms": [
            "Event-driven"
        ],
        "domains": [
            "Rapid Application Development",
            "Mobile Development"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "rad-languages.js"
    },
    {
        "name": "Modula-3",
        "year": 1988,
        "creator": "Luca Cardelli",
        "code": "MODULE Hello EXPORTS Main;\nIMPORT IO;\nBEGIN\n  IO.Put(\"Hello, World!\\n\");\nEND Hello.",
        "desc": "Modula-3 is a programming language conceived as a successor to an upgraded version of Modula-2 known as Modula-2+. It was developed at Digital Equipment Corporation and Olivetti.",
        "popularity": 5,
        "categories": [
            "Legacy",
            "System Programming"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural",
            "Object-Oriented"
        ],
        "domains": [
            "System Programming"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "system-languages.js"
    },
    {
        "name": "Mumps",
        "year": 1966,
        "creator": "Neil Pappalardo",
        "code": "WRITE \"Hello, World!\",!",
        "desc": "MUMPS (Massachusetts General Hospital Utility Multi-Programming System) is a general-purpose computer programming language originally designed for the healthcare industry.",
        "popularity": 8,
        "categories": [
            "Legacy",
            "Healthcare"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Healthcare",
            "Database Applications"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "healthcare-languages.js"
    },
    {
        "name": "Newspeak",
        "year": 2006,
        "creator": "Gilad Bracha",
        "code": "class HelloWorld = (\npublic main = (\n  'Hello, World!' out\n)\n)",
        "desc": "Newspeak is a programming language and platform in the tradition of Smalltalk and Self being developed by a team led by Gilad Bracha.",
        "popularity": 3,
        "categories": [
            "Object-Oriented",
            "Research"
        ],
        "primaryCategory": "Research",
        "paradigms": [
            "Object-Oriented"
        ],
        "domains": [
            "Research"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "research-languages.js"
    },
    {
        "name": "Occam",
        "year": 1983,
        "creator": "David May",
        "code": "#INCLUDE \"consts.inc\"\n#INCLUDE \"hostio.inc\"\nPROC main (CHAN OF BYTE keyboard, screen, error)\n  so.write.string.nl (screen, \"Hello, World!\")\n:",
        "desc": "Occam is a concurrent programming language that builds on the communicating sequential processes (CSP) process algebra, and shares many of its features.",
        "popularity": 5,
        "categories": [
            "Legacy",
            "Concurrent"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Concurrent"
        ],
        "domains": [
            "Parallel Computing",
            "Embedded Systems"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "concurrent-languages.js"
    },
    {
        "name": "Oz",
        "year": 1991,
        "creator": "Gert Smolka",
        "code": "{System.showInfo \"Hello, World!\"}",
        "desc": "Oz is a multiparadigm programming language, developed in the Programming Systems Lab at Université catholique de Louvain, for programming language education and research.",
        "popularity": 5,
        "categories": [
            "Multi-paradigm",
            "Academic"
        ],
        "primaryCategory": "Academic",
        "paradigms": [
            "Multi-paradigm",
            "Concurrent"
        ],
        "domains": [
            "Education",
            "Research"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "Paradox",
        "year": 1985,
        "creator": "Richard Schwartz",
        "code": "MESSAGE \"Hello, World!\"",
        "desc": "Paradox is a relational database management system originally written by Richard Schwartz and Robert Shostak for DOS. It included its own programming language.",
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
            "Database Applications"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "database-languages.js"
    },
    {
        "name": "Pike",
        "year": 1994,
        "creator": "Fredrik Hübinette",
        "code": "int main() {\n  write(\"Hello, World!\\n\");\n  return 0;\n}",
        "desc": "Pike is an interpreted, general-purpose, high-level, cross-platform, dynamic programming language, with a syntax similar to that of C.",
        "popularity": 8,
        "categories": [
            "General Purpose",
            "Interpreted"
        ],
        "primaryCategory": "General Purpose",
        "paradigms": [
            "Multi-paradigm"
        ],
        "domains": [
            "General Purpose",
            "Web Development"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "general-languages.js"
    },
    {
        "name": "PL/M",
        "year": 1972,
        "creator": "Gary Kildall",
        "code": "HELLO: PROCEDURE;\n  CALL PRINT('HELLO, WORLD!');\nEND HELLO;",
        "desc": "PL/M (Programming Language for Microcomputers) is a high-level programming language developed by Intel for their microprocessors.",
        "popularity": 3,
        "categories": [
            "Legacy",
            "System Programming"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "System Programming",
            "Embedded Systems"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "embedded-languages.js"
    },
    {
        "name": "PL/SQL",
        "year": 1991,
        "creator": "Oracle Corporation",
        "code": "BEGIN\n  DBMS_OUTPUT.PUT_LINE('Hello, World!');\nEND;\n/",
        "desc": "PL/SQL (Procedural Language/Structured Query Language) is Oracle Corporation's procedural extension for SQL and the Oracle relational database.",
        "popularity": 35,
        "categories": [
            "Database",
            "Procedural"
        ],
        "primaryCategory": "Database",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Database Applications",
            "Enterprise Software"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "database-languages.js"
    },
    {
        "name": "Prolog",
        "year": 1972,
        "creator": "Alain Colmerauer",
        "code": ":- write('Hello, World!'), nl.",
        "desc": "Prolog is a logic programming language associated with artificial intelligence and computational linguistics. It was created by Alain Colmerauer and Philippe Roussel.",
        "popularity": 15,
        "categories": [
            "Logic Programming",
            "AI"
        ],
        "primaryCategory": "Logic Programming",
        "paradigms": [
            "Logic Programming"
        ],
        "domains": [
            "Artificial Intelligence",
            "Expert Systems"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "ai-languages.js"
    },
    {
        "name": "QBasic",
        "year": 1991,
        "creator": "Microsoft",
        "code": "PRINT \"Hello, World!\"",
        "desc": "QBasic is an IDE and interpreter for a variant of the BASIC programming language which is based on QuickBASIC. It was developed and marketed by Microsoft.",
        "popularity": 15,
        "categories": [
            "Legacy",
            "Educational"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Education",
            "Beginner Programming"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "RPG",
        "year": 1959,
        "creator": "IBM",
        "code": "     C                   DSPLY     'Hello, World!'",
        "desc": "RPG (Report Program Generator) is a high-level programming language for business applications, originally developed by IBM in 1959.",
        "popularity": 12,
        "categories": [
            "Legacy",
            "Business"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Business Applications",
            "Mainframe Computing"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "business-languages.js"
    },
    {
        "name": "Simula",
        "year": 1962,
        "creator": "Ole-Johan Dahl",
        "code": "Begin\n   OutText(\"Hello, World!\");\n   Outimage;\nEnd;",
        "desc": "Simula is the name of two simulation programming languages, Simula I and Simula 67, developed in the 1960s at the Norwegian Computing Center. It introduced object-oriented programming.",
        "popularity": 8,
        "categories": [
            "Legacy",
            "Historical",
            "Object-Oriented"
        ],
        "primaryCategory": "Historical",
        "paradigms": [
            "Object-Oriented",
            "Procedural"
        ],
        "domains": [
            "Simulation",
            "Scientific Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "historical-languages.js"
    },
    {
        "name": "Smalltalk",
        "year": 1972,
        "creator": "Alan Kay",
        "code": "Transcript show: 'Hello, World!'.",
        "desc": "Smalltalk is an object-oriented, dynamically typed reflective programming language. It was designed and created in part for educational use at Xerox PARC by Alan Kay and others.",
        "popularity": 12,
        "categories": [
            "Object-Oriented",
            "Educational"
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
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "Turbo Pascal",
        "year": 1983,
        "creator": "Anders Hejlsberg",
        "code": "program HelloWorld;\nbegin\n  writeln('Hello, World!');\nend.",
        "desc": "Turbo Pascal is a software development system that includes a compiler and an integrated development environment (IDE) for the Pascal programming language running on CP/M, CP/M-86, and DOS.",
        "popularity": 18,
        "categories": [
            "Legacy",
            "Educational"
        ],
        "primaryCategory": "Educational",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Education",
            "System Programming"
        ],
        "difficulty": "Beginner to Intermediate",
        "typing": "Static",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "WATFIV",
        "year": 1967,
        "creator": "University of Waterloo",
        "code": "      WRITE(6,100)\n100   FORMAT(' HELLO, WORLD!')\n      STOP\n      END",
        "desc": "WATFIV (WATerloo FORTRAN IV) was a FORTRAN compiler developed at the University of Waterloo for student use in the late 1960s.",
        "popularity": 3,
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
            "Scientific Computing"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "educational-languages.js"
    },
    {
        "name": "FLOW-MATIC",
        "year": 1955,
        "creator": "Grace Hopper",
        "code": "INPUT INVENTORY FILE-A PRICE FILE-B ; OUTPUT PRICED-INV FILE-C UNPRICED-INV FILE-D .\nHSP *'HELLO, WORLD!' .",
        "desc": "FLOW-MATIC was one of the first English-like data processing languages, developed by Grace Hopper and her team. It was a precursor to COBOL.",
        "popularity": 3,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Historical",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Business Computing",
            "Data Processing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "historical-languages.js"
    },
    {
        "name": "Short Code",
        "year": 1949,
        "creator": "John Mauchly",
        "code": "X3 =  HELLO, WORLD!\nX4 03 05 \nX5 40 \n01",
        "desc": "Short Code was one of the first high-level programming languages, developed for the BINAC and UNIVAC I computers by John Mauchly.",
        "popularity": 2,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Historical",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Early Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Untyped",
        "sourceFile": "historical-languages.js"
    },
    {
        "name": "Autocode",
        "year": 1952,
        "creator": "Alick Glennie",
        "code": "n1 = 'HELLO, WORLD!'\nc1 = n1",
        "desc": "Autocode was the name given to a family of early computer programming systems, more advanced than machine code but simpler than later high-level languages.",
        "popularity": 3,
        "categories": [
            "Legacy",
            "Historical"
        ],
        "primaryCategory": "Historical",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Early Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Dynamic",
        "sourceFile": "historical-languages.js"
    },
    {
        "name": "MAD",
        "year": 1959,
        "creator": "University of Michigan",
        "code": "PRINT FORMAT HELLO, WORLD!\nEND OF PROGRAM",
        "desc": "MAD (Michigan Algorithm Decoder) was a programming language and compiler developed at the University of Michigan in 1959.",
        "popularity": 4,
        "categories": [
            "Legacy",
            "Academic"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Academic Computing",
            "Scientific Computing"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "JOVIAL",
        "year": 1960,
        "creator": "Jules Schwartz",
        "code": "START\nTYPE 'HELLO, WORLD!' $\nSTOP $",
        "desc": "JOVIAL (Jules' Own Version of the International Algebraic Language) was a high-level programming language developed for military computer applications.",
        "popularity": 5,
        "categories": [
            "Legacy",
            "Military"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Military Applications",
            "Real-time Systems"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "military-languages.js"
    },
    {
        "name": "NELIAC",
        "year": 1958,
        "creator": "Navy Electronics Laboratory",
        "code": "PROCEDURE HELLO;\nWRITE 'HELLO, WORLD!';\nEND;",
        "desc": "NELIAC (Navy Electronics Laboratory International ALGOL Compiler) was developed by the U.S. Navy Electronics Laboratory.",
        "popularity": 3,
        "categories": [
            "Legacy",
            "Military"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Procedural"
        ],
        "domains": [
            "Military Applications",
            "Scientific Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "military-languages.js"
    },
    {
        "name": "Idris 2",
        "year": 2020,
        "creator": "Edwin Brady",
        "code": "module Main\n\nmain : IO ()\nmain = putStrLn \"Hello, World!\"",
        "desc": "Idris 2 is a purely functional programming language with dependent types, designed for general-purpose programming with a focus on type safety.",
        "popularity": 8,
        "categories": [
            "Functional",
            "Academic"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional",
            "Dependent Types"
        ],
        "domains": [
            "Research",
            "Formal Verification"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "ReasonML",
        "year": 2016,
        "creator": "Jordan Walke",
        "code": "let () = print_endline(\"Hello, World!\");",
        "desc": "ReasonML is a syntax extension and toolchain for OCaml, created by Facebook to make functional programming more accessible.",
        "popularity": 12,
        "categories": [
            "Functional",
            "Web"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional"
        ],
        "domains": [
            "Web Development",
            "System Programming"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Futhark",
        "year": 2014,
        "creator": "Troels Henriksen",
        "code": "let main = \"Hello, World!\"",
        "desc": "Futhark is a purely functional data-parallel programming language designed for high-performance computing on GPUs.",
        "popularity": 5,
        "categories": [
            "Functional",
            "Parallel"
        ],
        "primaryCategory": "Functional",
        "paradigms": [
            "Functional",
            "Parallel"
        ],
        "domains": [
            "High Performance Computing",
            "GPU Programming"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "parallel-languages.js"
    },
    {
        "name": "GAMS",
        "year": 1976,
        "creator": "Alexander Meeraus",
        "code": "Display 'Hello, World!';",
        "desc": "GAMS (General Algebraic Modeling System) is a high-level modeling system for mathematical optimization problems.",
        "popularity": 10,
        "categories": [
            "Domain-Specific",
            "Mathematical"
        ],
        "primaryCategory": "Domain-Specific",
        "paradigms": [
            "Declarative"
        ],
        "domains": [
            "Mathematical Optimization",
            "Operations Research",
            "Economics"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "mathematical-languages.js"
    },
    {
        "name": "AMPL",
        "year": 1985,
        "creator": "Robert Fourer",
        "code": "printf \"Hello, World!\\n\";",
        "desc": "AMPL (A Mathematical Programming Language) is an algebraic modeling language for describing and solving high-complexity problems.",
        "popularity": 8,
        "categories": [
            "Domain-Specific",
            "Mathematical"
        ],
        "primaryCategory": "Domain-Specific",
        "paradigms": [
            "Declarative"
        ],
        "domains": [
            "Mathematical Programming",
            "Optimization",
            "Operations Research"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "mathematical-languages.js"
    },
    {
        "name": "Chapel",
        "year": 2009,
        "creator": "Cray Inc.",
        "code": "writeln(\"Hello, World!\");",
        "desc": "Chapel is a parallel programming language developed by Cray Inc. designed for productive parallel computing at scale.",
        "popularity": 12,
        "categories": [
            "Parallel",
            "High Performance"
        ],
        "primaryCategory": "Parallel",
        "paradigms": [
            "Parallel",
            "Object-Oriented"
        ],
        "domains": [
            "High Performance Computing",
            "Parallel Computing",
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
        "code": "public class HelloWorld {\n    public static def main(args:Rail[String]) {\n        Console.OUT.println(\"Hello, World!\");\n    }\n}",
        "desc": "X10 is a programming language developed by IBM for high-performance parallel computing, designed to be productive for distributed computing.",
        "popularity": 8,
        "categories": [
            "Parallel",
            "Distributed"
        ],
        "primaryCategory": "Parallel",
        "paradigms": [
            "Object-Oriented",
            "Parallel"
        ],
        "domains": [
            "High Performance Computing",
            "Distributed Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "parallel-languages.js"
    },
    {
        "name": "Fortress",
        "year": 2006,
        "creator": "Sun Microsystems",
        "code": "export Executable\nrun() = println(\"Hello, World!\")",
        "desc": "Fortress was a programming language developed by Sun Microsystems for high-performance computing with mathematical notation support.",
        "popularity": 5,
        "categories": [
            "Legacy",
            "Scientific"
        ],
        "primaryCategory": "Legacy",
        "paradigms": [
            "Functional",
            "Parallel"
        ],
        "domains": [
            "Scientific Computing",
            "High Performance Computing"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "scientific-languages.js"
    },
    {
        "name": "S",
        "year": 1976,
        "creator": "John Chambers",
        "code": "print(\"Hello, World!\")",
        "desc": "S is a statistical programming language developed at Bell Labs. It was the precursor to the R programming language.",
        "popularity": 10,
        "categories": [
            "Legacy",
            "Statistical"
        ],
        "primaryCategory": "Statistical",
        "paradigms": [
            "Functional",
            "Interactive"
        ],
        "domains": [
            "Statistical Computing",
            "Data Analysis"
        ],
        "difficulty": "Intermediate",
        "typing": "Dynamic",
        "sourceFile": "statistical-languages.js"
    },
    {
        "name": "Jai",
        "year": 2014,
        "creator": "Jonathan Blow",
        "code": "#import \"Basic\";\n\nmain :: () {\n    print(\"Hello, World!\\n\");\n}",
        "desc": "Jai is a programming language designed by Jonathan Blow for game development, focusing on simplicity and performance.",
        "popularity": 15,
        "categories": [
            "Modern",
            "Game Development"
        ],
        "primaryCategory": "Game Development",
        "paradigms": [
            "Procedural",
            "Data-Oriented"
        ],
        "domains": [
            "Game Development",
            "System Programming"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "game-languages.js"
    },
    {
        "name": "Vale",
        "year": 2019,
        "creator": "Evan Ovadia",
        "code": "import stdlib.*;\n\nexported func main() {\n  println(\"Hello, World!\");\n}",
        "desc": "Vale is a programming language that aims to be fast, safe, and easy, with innovative memory management techniques.",
        "popularity": 8,
        "categories": [
            "Modern",
            "Systems"
        ],
        "primaryCategory": "Systems",
        "paradigms": [
            "Object-Oriented",
            "Functional"
        ],
        "domains": [
            "System Programming",
            "Game Development"
        ],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "AngelScript",
        "year": 2003,
        "creator": "Andreas Jönsson",
        "code": "void main() {\n    print(\"Hello, World!\\n\");\n}",
        "desc": "AngelScript is a flexible cross-platform scripting library designed to be embedded in applications, popular in game development.",
        "popularity": 18,
        "categories": [
            "Scripting",
            "Game Development"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Object-Oriented",
            "Procedural"
        ],
        "domains": [
            "Game Development",
            "Embedded Scripting"
        ],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Squirrel",
        "year": 2003,
        "creator": "Alberto Demichelis",
        "code": "print(\"Hello, World!\\n\");",
        "desc": "Squirrel is a lightweight scripting language designed for embedding in applications, with syntax similar to C and JavaScript.",
        "popularity": 15,
        "categories": [
            "Scripting",
            "Game Development"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Object-Oriented",
            "Functional"
        ],
        "domains": [
            "Game Development",
            "Embedded Scripting"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Wren",
        "year": 2013,
        "creator": "Bob Nystrom",
        "code": "System.print(\"Hello, World!\")",
        "desc": "Wren is a small, fast, class-based concurrent scripting language designed for embedding in applications.",
        "popularity": 12,
        "categories": [
            "Scripting",
            "Embedded"
        ],
        "primaryCategory": "Scripting",
        "paradigms": [
            "Object-Oriented",
            "Concurrent"
        ],
        "domains": [
            "Embedded Scripting",
            "Game Development"
        ],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "scripting-languages.js"
    },
    {
        "name": "Assembly (x86 NASM)",
        "year": 1972,
        "creator": "Intel",
        "code": "section .data\n    hello db 'Hello, World!', 0\n\nsection .text\n    global _start\n\n_start:\n    ; write system call\n    mov eax, 4\n    mov ebx, 1\n    mov ecx, hello\n    mov edx, 13\n    int 0x80\n    \n    ; exit system call\n    mov eax, 1\n    mov ebx, 0\n    int 0x80",
        "desc": "Assembly language is a low-level programming language with a very strong correspondence between the instructions in the language and the architecture's machine code instructions. This is x86 assembly using NASM syntax.",
        "popularity": 25,
        "categories": [
            "Systems",
            "Low-level"
        ],
        "primaryCategory": "Systems",
        "paradigms": [
            "Imperative",
            "Procedural"
        ],
        "domains": [
            "System Programming",
            "Operating Systems",
            "Embedded Systems",
            "Device Drivers"
        ],
        "difficulty": "Advanced",
        "typing": "Untyped",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Assembly (x86-64)",
        "year": 2003,
        "creator": "AMD/Intel",
        "code": "section .data\n    hello db 'Hello, World!', 10, 0\n    hello_len equ $ - hello - 1\n\nsection .text\n    global _start\n\n_start:\n    ; write system call\n    mov rax, 1\n    mov rdi, 1\n    mov rsi, hello\n    mov rdx, hello_len\n    syscall\n    \n    ; exit system call\n    mov rax, 60\n    mov rdi, 0\n    syscall",
        "desc": "x86-64 assembly language for 64-bit processors. Assembly language usually has one statement per machine instruction and provides direct access to processor registers and memory.",
        "popularity": 30,
        "categories": [
            "Systems",
            "Low-level"
        ],
        "primaryCategory": "Systems",
        "paradigms": [
            "Imperative",
            "Procedural"
        ],
        "domains": [
            "System Programming",
            "Operating Systems",
            "High Performance Computing",
            "Reverse Engineering"
        ],
        "difficulty": "Advanced",
        "typing": "Untyped",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Assembly (ARM)",
        "year": 1985,
        "creator": "Acorn Computers",
        "code": ".data\nhello: .asciz \"Hello, World!\\n\"\n\n.text\n.global _start\n\n_start:\n    @ write system call\n    mov r7, #4\n    mov r0, #1\n    ldr r1, =hello\n    mov r2, #14\n    swi 0\n    \n    @ exit system call\n    mov r7, #1\n    mov r0, #0\n    swi 0",
        "desc": "ARM assembly language for ARM processors, widely used in mobile devices and embedded systems. ARM assembly uses a different instruction set architecture compared to x86.",
        "popularity": 35,
        "categories": [
            "Systems",
            "Embedded",
            "Mobile"
        ],
        "primaryCategory": "Embedded",
        "paradigms": [
            "Imperative",
            "Procedural"
        ],
        "domains": [
            "Embedded Systems",
            "Mobile Development",
            "IoT",
            "System Programming"
        ],
        "difficulty": "Advanced",
        "typing": "Untyped",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Assembly (MIPS)",
        "year": 1981,
        "creator": "MIPS Technologies",
        "code": ".data\nhello: .asciiz \"Hello, World!\\n\"\n\n.text\n.globl main\n\nmain:\n    # print string\n    li $v0, 4\n    la $a0, hello\n    syscall\n    \n    # exit program\n    li $v0, 10\n    syscall",
        "desc": "MIPS assembly language for MIPS processors, commonly used in academic settings to teach computer architecture and assembly programming concepts.",
        "popularity": 20,
        "categories": [
            "Academic",
            "Systems",
            "Educational"
        ],
        "primaryCategory": "Academic",
        "paradigms": [
            "Imperative",
            "Procedural"
        ],
        "domains": [
            "Education",
            "Embedded Systems",
            "Computer Architecture"
        ],
        "difficulty": "Advanced",
        "typing": "Untyped",
        "sourceFile": "academic-languages.js"
    },
    {
        "name": "Assembly (RISC-V)",
        "year": 2010,
        "creator": "UC Berkeley",
        "code": ".data\nhello: .string \"Hello, World!\\n\"\n\n.text\n.globl _start\n\n_start:\n    # write system call\n    li a7, 64          # sys_write\n    li a0, 1           # stdout\n    la a1, hello       # message address\n    li a2, 14          # message length\n    ecall\n    \n    # exit system call\n    li a7, 93          # sys_exit\n    li a0, 0           # exit status\n    ecall",
        "desc": "RISC-V assembly language for the open-source RISC-V instruction set architecture. RISC-V is a modern, modular ISA designed for research and commercial use, gaining popularity in academia and industry.",
        "popularity": 25,
        "categories": [
            "Modern",
            "Systems",
            "Academic",
            "Open Source"
        ],
        "primaryCategory": "Modern",
        "paradigms": [
            "Imperative",
            "Procedural"
        ],
        "domains": [
            "System Programming",
            "Embedded Systems",
            "Research",
            "Education",
            "Hardware Design"
        ],
        "difficulty": "Advanced",
        "typing": "Untyped",
        "sourceFile": "systems-languages.js"
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = languages;
}
