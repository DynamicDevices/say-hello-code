
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

// Main application JavaScript for Say Hello Code
// Moved from index.html for better organization and maintainability

// Global variables
var allLanguages = [];
var filteredLanguages = [];
var currentSort = 'popularity';

// DOM elements
var searchInput, categoryFilter, sortSelect, languagesContainer, noResults;

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    searchInput = document.getElementById('searchInput');
    categoryFilter = document.getElementById('categoryFilter');
    sortSelect = document.getElementById('sortSelect');
    languagesContainer = document.getElementById('languagesContainer');
    noResults = document.getElementById('noResults');

    // Function to initialize the app with language data
    // Function to initialize the app with language data
    function initializeApp() {
        console.log('Attempting to initialize app...');
        console.log('typeof languages:', typeof languages);
        console.log('languages defined:', typeof languages !== 'undefined');
        console.log('languages length:', typeof languages !== 'undefined' ? languages.length : 'N/A');

        if (typeof languages !== 'undefined' && languages.length > 0) {
            // Deduplicate languages based on normalized names
            allLanguages = deduplicateLanguages(languages);
            filteredLanguages = allLanguages.slice();

            console.log('Languages loaded successfully:', allLanguages.length, 'languages (after deduplication)');

            // Initial render
            updateStatistics(filteredLanguages);
            renderLanguages();

            // Set up event listeners
            setupEventListeners();

            return true; // Success
        } else {
            console.error('Languages data not loaded - typeof languages:', typeof languages);
            console.error('Available global variables:', Object.keys(window).filter(key => key.includes('lang')));

            // Show loading message instead of error initially
            if (languagesContainer) {
                languagesContainer.innerHTML = '<div class="loading-message">Loading language data...</div>';
            }
            return false; // Failed
        }
    }

// Deduplicate languages based on normalized names
function deduplicateLanguages(languages) {
    var seen = {};
    var deduplicated = [];

    for (var i = 0; i < languages.length; i++) {
        var lang = languages[i];
        var normalizedName = lang.name.toLowerCase().trim();

        // Handle common variations but preserve important special characters
        normalizedName = normalizedName
            .replace(/\s+/g, '') // Remove spaces
            .replace(/[^\w#\+\-\.]/g, ''); // Remove special characters but keep #, +, -, .

        if (!seen[normalizedName]) {
            seen[normalizedName] = true;
            deduplicated.push(lang);
        } else {
            console.log('Duplicate language removed:', lang.name);
        }
    }

    return deduplicated;
}

    // Try to initialize immediately
    if (!initializeApp()) {
        // If languages not loaded yet, try again with increasing delays
        var retryCount = 0;
        var maxRetries = 10;

        function retryInit() {
            retryCount++;
            console.log('Retry attempt', retryCount, 'of', maxRetries);

            if (initializeApp()) {
                console.log('Successfully initialized on retry', retryCount);
                return;
            }

            if (retryCount < maxRetries) {
                setTimeout(retryInit, retryCount * 100); // Increasing delay
            } else {
                console.error('Failed to initialize after', maxRetries, 'attempts');
                if (languagesContainer) {
                    languagesContainer.innerHTML = '<div class="error-message">Failed to load language data after multiple attempts. Please refresh the page or clear your browser cache.</div>';
                }
            }
        }

        setTimeout(retryInit, 100);
    }
});

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function() {
        filterLanguages();
    });

    // Category filter
    categoryFilter.addEventListener('change', function() {
        filterLanguages();
    });

    // Sort functionality
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        filteredLanguages = sortLanguages(filteredLanguages, currentSort);
        renderLanguages();
    });

    // Clear filters button
    var clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            searchInput.value = '';
            categoryFilter.value = '';
            sortSelect.value = 'popularity';
            currentSort = 'popularity';
            filteredLanguages = allLanguages.slice();
            filteredLanguages = sortLanguages(filteredLanguages, currentSort);
            updateStatistics(filteredLanguages);
            renderLanguages();
        });
    }
}

function filterLanguages() {
    var searchTerm = searchInput.value.trim();
    var selectedCategory = categoryFilter.value;

    console.log('Filtering with search term:', searchTerm, 'category:', selectedCategory);

    if (!searchTerm && !selectedCategory) {
        filteredLanguages = allLanguages.slice();
    } else {
        filteredLanguages = allLanguages.filter(function(lang) {
            var matchesSearch = true;

            if (searchTerm) {
                var searchLower = searchTerm.toLowerCase();
                var langName = lang.name.toLowerCase();
                var langCreator = (lang.creator || '').toLowerCase();
                var langYear = lang.year.toString();
                var langDesc = (lang.desc || '').toLowerCase();

                // For very short searches (1-2 characters), be more restrictive than longer searches
                if (searchTerm.length <= 2) {
                    // Match exact name or name that starts with the search term
                    var exactNameMatch = langName === searchLower;
                    var nameStartsWith = langName.startsWith(searchLower);

                    matchesSearch = exactNameMatch || nameStartsWith;

                } else if (searchTerm.length === 3) {
                    // For 3-character searches, allow exact match, starts with, or word boundary
                    var exactNameMatch = langName === searchLower;
                    var nameStartsWith = langName.startsWith(searchLower);
                    // Escape special regex characters for word boundary check
                    var escapedSearch = searchLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    var wordBoundaryRegex = new RegExp('\\b' + escapedSearch + '\\b', 'i');
                    var isCompleteWord = wordBoundaryRegex.test(lang.name);

                    matchesSearch = exactNameMatch || nameStartsWith || isCompleteWord;

                } else {
                    // For longer searches (4+ characters), use broader matching
                    var exactNameMatch = langName === searchLower;
                    var nameStartsWith = langName.startsWith(searchLower);
                    var nameContains = langName.includes(searchLower);
                    var creatorContains = langCreator.includes(searchLower);
                    var yearMatches = langYear.includes(searchTerm);
                    var descContains = langDesc.includes(searchLower);

                    // Prioritize name matches over other fields
                    matchesSearch = exactNameMatch ||
                                  nameStartsWith ||
                                  nameContains ||
                                  creatorContains ||
                                  yearMatches ||
                                  descContains;
                }

                // Debug logging for short searches
                if (searchTerm.length <= 3 && matchesSearch) {
                    console.log('Match found for "' + searchTerm + '":', lang.name);
                }
            }

            var matchesCategory = !selectedCategory ||
                (lang.categories && lang.categories.includes(selectedCategory)) ||
                lang.primaryCategory === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }

    console.log('Filtered results:', filteredLanguages.length, 'languages');

    filteredLanguages = sortLanguages(filteredLanguages, currentSort);
    updateStatistics(filteredLanguages);
    renderLanguages();
}

// Update statistics display
function updateStatistics(languages) {
    var totalLanguagesElement = document.getElementById('totalLanguages');
    var yearRangeElement = document.getElementById('yearRange');
    var visibleLanguagesElement = document.getElementById('visibleLanguages');

    if (totalLanguagesElement) {
        totalLanguagesElement.textContent = allLanguages.length;
    }

    if (visibleLanguagesElement) {
        visibleLanguagesElement.textContent = languages.length;
    }

    if (yearRangeElement && languages.length > 0) {
        var years = languages.map(function(lang) { return lang.year; });
        var minYear = Math.min.apply(Math, years);
        var maxYear = Math.max.apply(Math, years);
        yearRangeElement.textContent = minYear + ' - ' + maxYear;
    }
}

// Sort languages by specified criteria
function sortLanguages(languages, sortBy) {
    return languages.slice().sort(function(a, b) {
        switch(sortBy) {
            case 'alphabetical':
                return a.name.localeCompare(b.name);
            case 'year':
                return a.year - b.year;
            case 'creator':
                return a.creator.localeCompare(b.creator);
            case 'popularity':
            default:
                return (b.popularity || 0) - (a.popularity || 0);
        }
    });
}

// HTML escape function for security
function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Generate reference link for a programming language
function generateReferenceLink(languageName) {
    var baseUrls = {
        // Popular Languages
        'Python': 'https://www.python.org/',
        'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        'Java': 'https://www.oracle.com/java/',
        'C': 'https://en.cppreference.com/w/c',
        'C++': 'https://en.cppreference.com/w/cpp',
        'C#': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
        'Go': 'https://golang.org/',
        'Rust': 'https://www.rust-lang.org/',
        'Swift': 'https://swift.org/',
        'Kotlin': 'https://kotlinlang.org/',
        'Ruby': 'https://www.ruby-lang.org/',
        'PHP': 'https://www.php.net/',
        'TypeScript': 'https://www.typescriptlang.org/',
        'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        'SQL': 'https://www.w3schools.com/sql/',
        'Bash': 'https://www.w3schools.com/bash/index.php',
        'PowerShell': 'https://learn.microsoft.com/en-us/powershell/',
        'R': 'https://www.r-project.org/',
        'MATLAB': 'https://en.wikipedia.org/wiki/MATLAB',
        'Perl': 'https://www.perl.org/',
        'Lua': 'https://www.lua.org/',
        'Haskell': 'https://www.haskell.org/',
        'Scala': 'https://www.scala-lang.org/',
        'Dart': 'https://dart.dev/',
        'Clojure': 'https://clojure.org/',
        'Erlang': 'https://www.erlang.org/',
        'Elixir': 'https://elixir-lang.org/',
        'F#': 'https://fsharp.org/',
        'OCaml': 'https://ocaml.org/',
        'Lisp': 'https://common-lisp.net/',
        'Scheme': 'https://www.scheme.org/',

        // Systems & Low-level Languages
        'Assembly x86': 'https://en.wikipedia.org/wiki/X86_assembly_language',
        'Assembly (x86-64)': 'https://en.wikipedia.org/wiki/X86-64',
        'Assembly (x86 NASM)': 'https://www.nasm.us/',
        'Assembly (ARM)': 'https://developer.arm.com/documentation/dui0473/m/writing-arm-assembly-language',
        'Assembly (MIPS)': 'https://en.wikipedia.org/wiki/MIPS_architecture',
        'Assembly (RISC-V)': 'https://riscv.org/technical/specifications/',
        'PDP-11 Assembly': 'https://en.wikipedia.org/wiki/PDP-11_architecture',
        'Fortran': 'https://fortran-lang.org/',
        'FORTRAN': 'https://fortran-lang.org/',
        'Ada': 'https://www.adacore.com/about-ada',
        'D': 'https://dlang.org/',
        'Zig': 'https://ziglang.org/',
        'Carbon': 'https://github.com/carbon-language/carbon-lang',
        'V': 'https://docs.vlang.io/',
        'Nim': 'https://nim-lang.org/',
        'Crystal': 'https://crystal-lang.org/',
        'Odin': 'https://odin-lang.org/',

        // Web & Frontend
        'Angular': 'https://angular.io/',
        'Vue.js': 'https://vuejs.org/',
        'React': 'https://react.dev/',
        'Svelte': 'https://svelte.dev/',
        'CoffeeScript': 'https://coffeescript.org/',
        'Elm': 'https://elm-lang.org/',
        'PureScript': 'https://www.purescript.org/',
        'ReScript': 'https://rescript-lang.org/',
        'JSX': 'https://react.dev/learn/writing-markup-with-jsx',
        'LESS': 'https://lesscss.org/',
        'SASS': 'https://sass-lang.com/',

        // Mobile Development
        'Flutter': 'https://flutter.dev/',
        'React Native': 'https://reactnative.dev/',
        'Objective-C': 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/',
        'Xamarin': 'https://learn.microsoft.com/en-us/xamarin/',
        'Ionic': 'https://ionicframework.com/',
        'PhoneGap': 'https://phonegap.com/',
        'Titanium': 'https://titaniumsdk.com/',

        // Functional Languages
        'Idris': 'https://www.idris-lang.org/',
        'Idris 2': 'https://www.idris-lang.org/',
        'Agda': 'https://wiki.portal.chalmers.se/agda/',
        'Coq': 'https://coq.inria.fr/',
        'Lean': 'https://leanprover.github.io/',
        'ML': 'https://www.smlnj.org/',
        'Standard ML': 'https://www.smlnj.org/',
        'Miranda': 'https://www.cs.kent.ac.uk/people/staff/dat/miranda/',
        'Clean': 'https://clean.cs.ru.nl/',
        'Joy': 'http://www.latrobe.edu.au/humanities/research/research-projects/past-projects/joy-programming-language',
        'Koka': 'https://koka-lang.github.io/',
        'Unison': 'https://www.unison-lang.org/',

        // Scripting & Shell
        'AWK': 'https://www.tutorialspoint.com/awk/index.htm',
        'Sed': 'https://en.wikipedia.org/wiki/Sed',
        'Tcl': 'https://www.tcl.tk/',
        'Expect': 'https://core.tcl-lang.org/expect/',
        'Zsh': 'https://www.zsh.org/',
        'Fish': 'https://fishshell.com/',
        'Csh': 'https://en.wikipedia.org/wiki/C_shell',
        'Tcsh': 'https://www.tcsh.org/',
        'Ksh': 'https://www.ibm.com/docs/en/aix/7.2.0?topic=shells-korn-shell',
        'Korn Shell': 'https://www.ibm.com/docs/en/aix/7.2.0?topic=shells-korn-shell',
        'Dash': 'https://wiki.ubuntu.com/DashAsBinSh',
        'Nushell': 'https://www.nushell.sh/',
        'Xonsh': 'https://xon.sh/',

        // Data & Analytics
        'Julia': 'https://julialang.org/',
        'Mathematica': 'https://www.wolfram.com/mathematica/',
        'Wolfram': 'https://www.wolfram.com/language/',
        'SAS': 'https://www.sas.com/',
        'SPSS': 'https://www.ibm.com/products/spss-statistics',
        'Stata': 'https://www.stata.com/',
        'Octave': 'https://octave.org/',
        'Maxima': 'https://maxima.sourceforge.io/',
        'Maple': 'https://www.maplesoft.com/products/maple/',
        'SageMath': 'https://www.sagemath.org/',
        'S': 'https://en.wikipedia.org/wiki/S_(programming_language)',

        // Database Languages
        'PostgreSQL': 'https://www.postgresql.org/',
        'MySQL': 'https://www.mysql.com/',
        'SQLite': 'https://www.sqlite.org/',
        'MongoDB': 'https://www.mongodb.com/',
        'Cypher': 'https://neo4j.com/developer/cypher/',
        'GraphQL': 'https://graphql.org/',
        'PL/SQL': 'https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/',
        'N1QL': 'https://docs.couchbase.com/server/current/n1ql/n1ql-language-reference/index.html',
        'SPARQL': 'https://www.w3.org/TR/sparql11-query/',

        // Enterprise & Legacy
        'COBOL': 'https://www.ibm.com/docs/en/cobol-zos',
        'BASIC': 'https://en.wikipedia.org/wiki/BASIC',
        'QBasic': 'https://en.wikipedia.org/wiki/QBasic',
        'GW-BASIC': 'https://en.wikipedia.org/wiki/GW-BASIC',
        'BBC BASIC': 'https://www.bbcbasic.co.uk/',
        'Pascal': 'https://www.freepascal.org/',
        'Turbo Pascal': 'https://en.wikipedia.org/wiki/Turbo_Pascal',
        'Delphi': 'https://www.embarcadero.com/products/delphi',
        'Visual Basic': 'https://learn.microsoft.com/en-us/dotnet/visual-basic/',
        'VB.NET': 'https://learn.microsoft.com/en-us/dotnet/visual-basic/',
        'ALGOL': 'https://en.wikipedia.org/wiki/ALGOL',
        'ALGOL 60': 'https://en.wikipedia.org/wiki/ALGOL_60',
        'ALGOL 68': 'https://en.wikipedia.org/wiki/ALGOL_68',
        'BCPL': 'https://en.wikipedia.org/wiki/BCPL',
        'B': 'https://en.wikipedia.org/wiki/B_(programming_language)',
        'CPL': 'https://en.wikipedia.org/wiki/CPL_(programming_language)',
        'PL/I': 'https://en.wikipedia.org/wiki/PL/I',
        'PL/M': 'https://en.wikipedia.org/wiki/PL/M',
        'CORAL 66': 'https://en.wikipedia.org/wiki/CORAL_66',
        'JOVIAL': 'https://en.wikipedia.org/wiki/JOVIAL',
        'JOSS': 'https://en.wikipedia.org/wiki/JOSS',
        'MAD': 'https://en.wikipedia.org/wiki/MAD_(programming_language)',
        'NELIAC': 'https://en.wikipedia.org/wiki/NELIAC',
        'Short Code': 'https://en.wikipedia.org/wiki/Short_Code_(computer_language)',
        'Autocode': 'https://en.wikipedia.org/wiki/Autocode',
        'FLOW-MATIC': 'https://en.wikipedia.org/wiki/FLOW-MATIC',
        'WATFIV': 'https://en.wikipedia.org/wiki/WATFIV',

        // Game Development
        'GDScript': 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/',
        'UnityScript': 'https://docs.unity3d.com/',
        'AngelScript': 'https://www.angelcode.com/angelscript/',
        'Squirrel': 'http://squirrel-lang.org/',
        'Ren\'Py': 'https://www.renpy.org/',
        'Inform': 'https://ganelson.github.io/inform-website/',
        'TADS': 'https://www.tads.org/',

        // Esoteric & Educational
        'Brainfuck': 'https://en.wikipedia.org/wiki/Brainfuck',
        'Befunge': 'https://en.wikipedia.org/wiki/Befunge',
        'Whitespace': 'https://en.wikipedia.org/wiki/Whitespace_(programming_language)',
        'Malbolge': 'https://en.wikipedia.org/wiki/Malbolge',
        'Chef': 'https://www.dangermouse.net/esoteric/chef.html',
        'Shakespeare': 'https://en.wikipedia.org/wiki/Shakespeare_Programming_Language',
        'LOLCODE': 'https://en.wikipedia.org/wiki/LOLCODE',
        'Piet': 'https://www.dangermouse.net/esoteric/piet.html',
        'Ook!': 'https://esolangs.org/wiki/Ook!',
        'Intercal': 'https://en.wikipedia.org/wiki/INTERCAL',

        // Configuration & Markup
        'YAML': 'https://yaml.org/',
        'TOML': 'https://toml.io/',
        'JSON': 'https://www.json.org/',
        'XML': 'https://www.w3.org/XML/',
        'Markdown': 'https://daringfireball.net/projects/markdown/',
        'LaTeX': 'https://www.latex-project.org/',
        'AsciiDoc': 'https://asciidoc.org/',
        'reStructuredText': 'https://docutils.sourceforge.io/rst.html',
        'Org-mode': 'https://orgmode.org/',
        'WikiText': 'https://www.mediawiki.org/wiki/Wikitext',
        'Textile': 'https://textile-lang.com/',
        'Creole': 'https://en.wikipedia.org/wiki/Creole_(markup)',

        // DevOps & Infrastructure
        'Dockerfile': 'https://docs.docker.com/engine/reference/builder/',
        'Terraform': 'https://www.terraform.io/',
        'Ansible': 'https://docs.ansible.com/',
        'Puppet': 'https://puppet.com/docs/',
        'SaltStack': 'https://docs.saltproject.io/',
        'Vagrant': 'https://www.vagrantup.com/docs',
        'CMake': 'https://cmake.org/documentation/',
        'Makefile': 'https://en.wikipedia.org/wiki/Make_(software)',
        'Gradle': 'https://gradle.org/',

        // Newer & Emerging Languages
        'Gleam': 'https://gleam.run/',
        'Roc': 'https://www.roc-lang.org/',
        'Grain': 'https://grain-lang.org/',
        'Fennel': 'https://fennel-lang.org/',
        'Janet': 'https://janet-lang.org/',
        'Jai': 'https://github.com/BSVino/JaiPrimer/blob/master/JaiPrimer.md',
        'JAI': 'https://github.com/BSVino/JaiPrimer/blob/master/JaiPrimer.md',
        'Red': 'https://www.red-lang.org/',
        'Factor': 'https://factorcode.org/',
        'Forth': 'https://www.forth.com/',
        'PostScript': 'https://en.wikipedia.org/wiki/PostScript',
        'Mojo': 'https://www.modular.com/mojo',
        'Bend': 'https://github.com/HigherOrderCO/Bend',
        'Vale': 'https://vale.dev/',
        'Inko': 'https://inko-lang.org/',
        'Wren': 'https://wren.io/',
        'Kitten': 'https://kittenlang.org/',

        // Specialized Languages
        'Prolog': 'https://www.swi-prolog.org/',
        'Smalltalk': 'https://squeak.org/',
        'Self': 'https://selflanguage.org/',
        'Io': 'https://iolanguage.org/',
        'Rebol': 'http://www.rebol.com/',
        'Logo': 'https://en.wikipedia.org/wiki/Logo_(programming_language)',
        'Scratch': 'https://scratch.mit.edu/',
        'LiveCode': 'https://livecode.com/',
        'HyperTalk': 'https://en.wikipedia.org/wiki/HyperTalk',
        'Lingo': 'https://en.wikipedia.org/wiki/Lingo_(programming_language)',
        'Mumps': 'https://en.wikipedia.org/wiki/MUMPS',
        'APL': 'https://www.dyalog.com/',
        'J': 'https://www.jsoftware.com/',
        'AutoLISP': 'https://help.autodesk.com/view/OARX/2024/ENU/?guid=GUID-C8C7B3A2-7B6D-4F7E-8C7B-7B6D4F7E8C7B',
        'K': 'https://kx.com/',
        'Q': 'https://kx.com/',

        // Additional Languages
        'ActionScript': 'https://airsdk.dev/reference/actionscript/3.0/',
        'AppleScript': 'https://developer.apple.com/library/archive/documentation/AppleScript/',
        'AutoHotkey': 'https://www.autohotkey.com/',
        'AutoLISP': 'https://help.autodesk.com/view/OARX/2023/ENU/?guid=GUID-C8C7B3A2-7B6D-4F7E-8C7B-7B6D4F7E8C7B',
        'Batch': 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands',
        'Boo': 'https://boo-language.github.io/',
        'Cat': 'https://github.com/cdiggins/cat-language',
        'Chapel': 'https://chapel-lang.org/',
        'Clipper': 'https://en.wikipedia.org/wiki/Clipper_(programming_language)',
        'dBASE': 'https://en.wikipedia.org/wiki/DBase',
        'Deno': 'https://github.com/denoland/deno',
        'Bun': 'https://bun.sh/',
        'Zig': 'https://ziglang.org/',
        'Vale': 'https://vale.dev/',
        'Bend': 'https://github.com/HigherOrderCO/Bend',
        'Roc': 'https://www.roc-lang.org/',
        'Unison': 'https://www.unison-lang.org/',
        'Mojo': 'https://docs.modular.com/mojo/',
        'Dylan': 'https://opendylan.org/',
        'Eiffel': 'https://www.eiffel.org/',
        'Euphoria': 'https://openeuphoria.org/',
        'FoxPro': 'https://en.wikipedia.org/wiki/Visual_FoxPro',
        'JScript': 'https://learn.microsoft.com/en-us/dotnet/api/microsoft.jscript',
        'Fortress': 'https://en.wikipedia.org/wiki/Fortress_(programming_language)',
        'Futhark': 'https://futhark-lang.org/',
        'GAMS': 'https://www.gams.com/',
        'Groovy': 'https://groovy-lang.org/',
        'Hack': 'https://hacklang.org/',
        'Hy': 'https://hylang.org/',
        'Icon': 'https://www.cs.arizona.edu/icon/',
        'Isabelle': 'https://isabelle.in.tum.de/',
        'JScript': 'https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/scripting-articles/',
        'LabVIEW': 'https://www.ni.com/en-us/shop/labview.html',
        'LiveScript': 'https://livescript.net/',
        'Modula-2': 'https://www.modula2.org/',
        'Modula-3': 'https://www.modula3.org/',
        'Newspeak': 'https://newspeaklanguage.org/',
        'Oberon': 'https://people.inf.ethz.ch/wirth/Oberon/index.html',
        'Occam': 'https://en.wikipedia.org/wiki/Occam_(programming_language)',
        'Oz': 'https://mozart.github.io/',
        'Paradox': 'https://en.wikipedia.org/wiki/Paradox_(database)',
        'Pike': 'https://pike.lysator.liu.se/',
        'Pony': 'https://www.ponylang.io/',
        'Processing': 'https://processing.org/',
        'Racket': 'https://racket-lang.org/',
        'ReasonML': 'https://reasonml.github.io/',
        'Regex': 'https://en.wikipedia.org/wiki/Regular_expression',
        'Rexx': 'https://www.rexx.org/',
        'RPG': 'https://en.wikipedia.org/wiki/IBM_RPG',
        'Simula': 'https://en.wikipedia.org/wiki/Simula',
        'SNOBOL': 'https://en.wikipedia.org/wiki/SNOBOL',
        'Solidity': 'https://soliditylang.org/',
        'SPICE': 'https://en.wikipedia.org/wiki/SPICE',
        'SystemVerilog': 'https://en.wikipedia.org/wiki/SystemVerilog',
        'Vala': 'https://vala.dev/',
        'Verilog': 'https://en.wikipedia.org/wiki/Verilog',
        'VHDL': 'https://en.wikipedia.org/wiki/VHDL',
        'GLSL': 'https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language',
        'HLSL': 'https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl',
        'Gnuplot': 'http://www.gnuplot.info/',
        'WebAssembly': 'https://webassembly.org/',
        'X10': 'https://github.com/x10-lang/x10',
        'XPath': 'https://www.w3.org/TR/xpath/',
        'XQuery': 'https://www.w3.org/TR/xquery/',
        'XSLT': 'https://www.w3.org/TR/xslt/',
        'AMPL': 'https://ampl.com/',

        // Additional missing languages
        'QML': 'https://doc.qt.io/qt-5/qmlapplications.html',
        'Raku': 'https://raku.org/',
        'Ring': 'https://ring-lang.github.io/',
        'Scilab': 'https://www.scilab.org/',
        'Stylus': 'https://stylus-lang.com/',
        'Twig': 'https://twig.symfony.com/',
        'Vim': 'https://www.vim.org/',
        'Xtend': 'https://www.eclipse.org/xtend/',
        'Yacc': 'https://www.gnu.org/software/bison/',
        'OpenSCAD': 'https://openscad.org/',
        'Meson': 'https://mesonbuild.com/',
        'MoonScript': 'https://moonscript.org/',
        'Mustache': 'https://mustache.github.io/',
        'Nix': 'https://nixos.org/manual/nix/stable/',
        'Nunjucks': 'https://mozilla.github.io/nunjucks/',
        'Pug': 'https://pugjs.org/',
        'Jade': 'https://pugjs.org/',
        'Jinja': 'https://jinja.palletsprojects.com/',
        'Jsonnet': 'https://jsonnet.org/',
        'Jupyter': 'https://jupyter.org/',
        'Less': 'https://lesscss.org/',
        'Liquid': 'https://shopify.github.io/liquid/',
        'Mako': 'https://www.makotemplates.org/',
        'Mercury': 'https://mercurylang.org/',
        'Handlebars': 'https://handlebarsjs.com/',
        'HCL': 'https://github.com/hashicorp/hcl',
        'Haxe': 'https://haxe.org/',
        'IDL': 'https://en.wikipedia.org/wiki/IDL_(programming_language)',
        'Ink': 'https://www.inklestudios.com/ink/',
        'Objective-J': 'https://www.cappuccino.dev/'
    };

    // First check if we have a specific URL for this language
    if (baseUrls[languageName]) {
        return baseUrls[languageName];
    }

    // Fallback strategies for languages not in our list

    // For well-known patterns, create more specific fallbacks
    if (languageName.toLowerCase().includes('assembly')) {
        return 'https://en.wikipedia.org/wiki/Assembly_language';
    }

    if (languageName.toLowerCase().includes('shell') || languageName.toLowerCase().includes('sh')) {
        return 'https://www.gnu.org/software/bash/manual/bash.html';
    }

    // Generic fallback - search on a programming-focused site
    return 'https://en.wikipedia.org/wiki/' + encodeURIComponent(languageName + '_(programming_language)');
}

// Validate and improve URL
function validateAndImproveUrl(url, languageName) {
    // Handle some common URL issues
    if (!url || url === '#') {
        return generateReferenceLink(languageName);
    }

    // Fix common URL issues
    if (url.startsWith('http://') && !url.includes('localhost')) {
        // Try to upgrade to HTTPS for better security
        var httpsUrl = url.replace('http://', 'https://');
        return httpsUrl;
    }

    return url;
}

// Get language type/category for display
function getLanguageType(lang) {
    var types = [];
    
    if (lang.categories && lang.categories.length > 0) {
        types = lang.categories.slice();
    } else if (lang.primaryCategory) {
        types = [lang.primaryCategory];
    }
    
    // Ensure we have at least one type
    if (types.length === 0) {
        types = ['General'];
    }
    
    return types;
}

// Get popularity level description
function getPopularityLevel(popularity) {
    if (!popularity || popularity === 0) return 'Unknown';
    if (popularity >= 90) return 'Very High';
    if (popularity >= 70) return 'High';
    if (popularity >= 50) return 'Medium';
    if (popularity >= 30) return 'Low';
    return 'Very Low';
}

// Copy code to clipboard
function copyCode(index, btn) {
    var lang = filteredLanguages[index];
    if (!lang) return;
    
    var code = lang.code;
    
    // Use the modern clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(function() {
            showCopyFeedback(btn, true);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(code, btn);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(code, btn);
    }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text, btn) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showCopyFeedback(btn);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }

    document.body.removeChild(textArea);
}

// Show copy feedback to user
function showCopyFeedback(btn, success) {
    var originalText = btn.querySelector('.btn-text').textContent;
    var originalIcon = btn.querySelector('.btn-icon').textContent;
    
    if (success) {
        btn.querySelector('.btn-text').textContent = 'Copied!';
        btn.querySelector('.btn-icon').textContent = '✓';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else {
        btn.querySelector('.btn-text').textContent = 'Failed';
        btn.querySelector('.btn-icon').textContent = '✗';
        btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    }
    
    setTimeout(function() {
        btn.querySelector('.btn-text').textContent = originalText;
        btn.querySelector('.btn-icon').textContent = originalIcon;
        btn.style.background = '';
    }, 2000);
}

// Render languages to the DOM
function renderLanguages() {
    if (!languagesContainer) return;
    
    if (filteredLanguages.length === 0) {
        languagesContainer.innerHTML = '';
        if (noResults) {
            noResults.style.display = 'block';
        }
        return;
    }

    if (noResults) {
        noResults.style.display = 'none';
    }

    var html = filteredLanguages.map(function(lang, index) {
        var referenceLink = generateReferenceLink(lang.name);
        var linkAttribute = lang.link ? lang.link : referenceLink;

        // Determine link type for better user experience
        var linkText = 'Learn';
        var linkIcon = '📖';

        linkAttribute = validateAndImproveUrl(linkAttribute, lang.name);

        if (linkAttribute === '#') {
            // This shouldn't happen with our improved generateReferenceLink, but just in case
            linkAttribute = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(lang.name + '_(programming_language)');
        }

        // Customize link text based on URL type
        if (linkAttribute.includes('wikipedia.org')) {
            linkText = 'Wiki';
            linkIcon = '📚';
        } else if (linkAttribute.includes('github.com')) {
            linkText = 'GitHub';
            linkIcon = '🔗';
        } else if (linkAttribute.includes('docs.') || linkAttribute.includes('/docs/')) {
            linkText = 'Docs';
            linkIcon = '📋';
        } else if (lang.link) {
            // If it's a custom link from the language data, keep generic "Learn"
            linkText = 'Learn';
            linkIcon = '📖';
        }
        
        var languageTypes = getLanguageType(lang);
        var popularityLevel = getPopularityLevel(lang.popularity);

        // Generate multiple type badges with data attributes for styling
        var typeBadges = languageTypes.map(function(type) {
            return `<span class="language-type" data-type="${type}">${type}</span>`;
        }).join('');

        // Add paradigm badges if available
        var paradigmBadges = '';
        if (lang.paradigms && lang.paradigms.length > 0) {
            paradigmBadges = lang.paradigms.map(function(paradigm) {
                return `<span class="language-paradigm">${paradigm}</span>`;
            }).join('');
        }

        // Add difficulty and typing info
        var metaInfo = '';
        if (lang.difficulty) {
            metaInfo += `<span class="language-difficulty">${lang.difficulty}</span>`;
        }
        if (lang.typing) {
            metaInfo += `<span class="language-typing">${lang.typing} Typed</span>`;
        }

        return `
            <div class="language-card" data-index="${index}">
                <!-- Card Header with Language Info -->
                <div class="language-card-header">
                    <div class="language-title-section">
                        <h3 class="language-name">${escapeHtml(lang.name)}</h3>
                        <div class="language-meta">
                            <span class="language-year">Created ${lang.year}</span>
                            <span class="language-creator">by ${escapeHtml(lang.creator)}</span>
                        </div>
                    </div>
                    <div class="language-actions">
                        <button class="copy-btn modern-btn" onclick="copyCode(${index}, this)">
                            <span class="btn-icon">📋</span>
                            <span class="btn-text">Copy</span>
                        </button>
                        <a href="${linkAttribute}" target="_blank" rel="noopener noreferrer" class="reference-btn modern-btn">
                            <span class="btn-icon">${linkIcon}</span>
                            <span class="btn-text">${linkText}</span>
                        </a>
                    </div>
                </div>

                <!-- Language Badges -->
                <div class="language-badges">
                    ${typeBadges}
                    ${paradigmBadges}
                    <span class="language-popularity">${popularityLevel}</span>
                    ${metaInfo}
                </div>

                <!-- Language Description -->
                <div class="language-description">
                    <p>${escapeHtml(lang.desc || 'No description available.')}</p>
                </div>

                <!-- Code Example -->
                <div class="code-container">
                    <div class="code-header">
                        <span class="code-label">Hello, World! Example</span>
                    </div>
                    <pre class="code-block"><code>${escapeHtml(lang.code)}</code></pre>
                </div>
            </div>
        `;
    }).join('');

    languagesContainer.innerHTML = html;
}