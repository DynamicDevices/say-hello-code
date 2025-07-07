#!/usr/bin/env python3
import os
import re
import json
from datetime import datetime

def extract_languages_from_file(filepath):
    """Extract language objects from a JavaScript file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the array content between [ and ]
    array_match = re.search(r'var\s+\w+\s*=\s*\[(.*?)\];', content, re.DOTALL)
    if not array_match:
        return []
    
    array_content = array_match.group(1)
    
    # Extract individual language objects
    languages = []
    # Match complete objects from { to }
    object_pattern = r'\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}'
    
    for match in re.finditer(object_pattern, array_content):
        obj_content = match.group(1)
        
        # Extract fields
        name_match = re.search(r'name:\s*"([^"]*)"', obj_content)
        year_match = re.search(r'year:\s*(\d+)', obj_content)
        creator_match = re.search(r'creator:\s*"([^"]*)"', obj_content)
        code_match = re.search(r'code:\s*"((?:[^"\\\\]|\\\\.)*)"', obj_content)
        desc_match = re.search(r'desc:\s*"((?:[^"\\\\]|\\\\.)*)"', obj_content)
        popularity_match = re.search(r'popularity:\s*(\d+)', obj_content)
        link_match = re.search(r'link:\s*"([^"]*)"', obj_content)
        
        if name_match and year_match and creator_match:
            lang = {
                'name': name_match.group(1),
                'year': int(year_match.group(1)),
                'creator': creator_match.group(1),
                'code': code_match.group(1) if code_match else '',
                'desc': desc_match.group(1) if desc_match else '',
                'popularity': int(popularity_match.group(1)) if popularity_match else 50
            }
            if link_match:
                lang['link'] = link_match.group(1)
            
            languages.append(lang)
    
    return languages

def get_typing_system(name, desc):
    """Determine the typing system of a language."""
    static_typed = ['Java', 'C#', 'C++', 'C', 'TypeScript', 'Rust', 'Go', 'Scala', 'Kotlin', 'Swift', 'Haskell', 'F#', 'Ada', 'Pascal', 'FORTRAN']
    dynamic_typed = ['Python', 'JavaScript', 'Ruby', 'PHP', 'Perl', 'Bash', 'Lua', 'R']
    
    if name in static_typed:
        return 'Static'
    if name in dynamic_typed:
        return 'Dynamic'
    
    desc_lower = desc.lower()
    if 'static' in desc_lower or 'strongly typed' in desc_lower or 'compiled' in desc_lower:
        return 'Static'
    if 'dynamic' in desc_lower or 'interpreted' in desc_lower:
        return 'Dynamic'
    
    return 'Mixed'

def get_paradigms(name, desc):
    """Determine programming paradigms for a language."""
    paradigms = []
    
    # Object-oriented
    oo_langs = ['Java', 'C#', 'C++', 'Python', 'Ruby', 'Scala', 'Kotlin', 'Swift', 'Objective-C', 'Smalltalk']
    if name in oo_langs or 'object-oriented' in desc.lower():
        paradigms.append('Object-Oriented')
    
    # Functional
    func_langs = ['Haskell', 'Lisp', 'Scheme', 'Clojure', 'F#', 'Scala', 'Erlang', 'Elixir', 'ML', 'OCaml', 'Elm']
    if name in func_langs or 'functional' in desc.lower():
        paradigms.append('Functional')
    
    # Procedural
    proc_langs = ['C', 'Pascal', 'FORTRAN', 'COBOL', 'Ada', 'ALGOL']
    if name in proc_langs or 'procedural' in desc.lower():
        paradigms.append('Procedural')
    
    # Logic
    logic_langs = ['Prolog', 'Mercury']
    if name in logic_langs or 'logic' in desc.lower():
        paradigms.append('Logic')
    
    return paradigms if paradigms else ['Multi-paradigm']

def get_domains(categories, name, desc):
    """Determine application domains for a language."""
    domains = []
    
    if 'Web' in categories or 'Frontend' in categories:
        domains.extend(['Web Development', 'Frontend Development'])
    if 'Backend' in categories:
        domains.append('Backend Development')
    if 'Mobile' in categories:
        domains.append('Mobile Development')
    if 'Data Science' in categories or name in ['R', 'Python', 'Julia', 'MATLAB']:
        domains.append('Data Science')
    if 'Systems' in categories or name in ['C', 'C++', 'Rust', 'Go']:
        domains.append('System Programming')
    if 'Game Development' in categories:
        domains.append('Game Development')
    if 'Scientific' in categories or name in ['FORTRAN', 'MATLAB', 'Julia']:
        domains.append('Scientific Computing')
    
    return list(set(domains)) if domains else ['General Purpose']

# Category mappings
category_mapping = {
    'popular-languages.js': {
        'categories': ['Popular'],
        'primaryCategory': 'Popular',
        'difficulty': 'Beginner to Intermediate'
    },
    'web-languages.js': {
        'categories': ['Web', 'Frontend'],
        'primaryCategory': 'Web',
        'difficulty': 'Beginner to Intermediate'
    },
    'systems-languages.js': {
        'categories': ['Systems', 'Low-level'],
        'primaryCategory': 'Systems',
        'difficulty': 'Advanced'
    },
    'functional-languages.js': {
        'categories': ['Functional'],
        'primaryCategory': 'Functional',
        'difficulty': 'Intermediate to Advanced'
    },
    'object-oriented-languages.js': {
        'categories': ['Object-Oriented'],
        'primaryCategory': 'Object-Oriented',
        'difficulty': 'Intermediate'
    },
    'scripting-languages.js': {
        'categories': ['Scripting', 'Automation'],
        'primaryCategory': 'Scripting',
        'difficulty': 'Beginner to Intermediate'
    },
    'mobile-languages.js': {
        'categories': ['Mobile'],
        'primaryCategory': 'Mobile',
        'difficulty': 'Intermediate'
    },
    'data-languages.js': {
        'categories': ['Data Science', 'Analytics'],
        'primaryCategory': 'Data Science',
        'difficulty': 'Intermediate'
    },
    'numerical-languages.js': {
        'categories': ['Numerical', 'Scientific'],
        'primaryCategory': 'Scientific',
        'difficulty': 'Advanced'
    },
    'academic-languages.js': {
        'categories': ['Academic', 'Research'],
        'primaryCategory': 'Academic',
        'difficulty': 'Advanced'
    },
    'game-languages.js': {
        'categories': ['Game Development'],
        'primaryCategory': 'Game Development',
        'difficulty': 'Intermediate'
    },
    'markup-languages.js': {
        'categories': ['Markup', 'Documentation'],
        'primaryCategory': 'Markup',
        'difficulty': 'Beginner'
    },
    'shell-languages.js': {
        'categories': ['Shell', 'Command Line'],
        'primaryCategory': 'Shell',
        'difficulty': 'Intermediate'
    },
    'config-languages.js': {
        'categories': ['Configuration', 'DevOps'],
        'primaryCategory': 'Configuration',
        'difficulty': 'Intermediate'
    },
    'legacy-languages.js': {
        'categories': ['Legacy', 'Historical'],
        'primaryCategory': 'Legacy',
        'difficulty': 'Intermediate to Advanced'
    },
    'vintage-languages.js': {
        'categories': ['Vintage', 'Historical'],
        'primaryCategory': 'Vintage',
        'difficulty': 'Advanced'
    },
    'esoteric-languages.js': {
        'categories': ['Esoteric', 'Educational'],
        'primaryCategory': 'Esoteric',
        'difficulty': 'Varies'
    },
    'emerging-languages.js': {
        'categories': ['Emerging', 'Modern'],
        'primaryCategory': 'Emerging',
        'difficulty': 'Intermediate'
    },
    'specialized-languages.js': {
        'categories': ['Specialized', 'Domain-Specific'],
        'primaryCategory': 'Specialized',
        'difficulty': 'Advanced'
    },
    'additional-languages.js': {
        'categories': ['Additional'],
        'primaryCategory': 'Additional',
        'difficulty': 'Varies'
    }
}

# Process all language files
all_languages = []
js_dir = 'js'

for filename in sorted(os.listdir(js_dir)):
    if filename.endswith('-languages.js'):
        filepath = os.path.join(js_dir, filename)
        languages = extract_languages_from_file(filepath)
        
        mapping = category_mapping.get(filename, {
            'categories': ['Other'],
            'primaryCategory': 'Other',
            'difficulty': 'Varies'
        })
        
        for lang in languages:
            # Enhance with metadata
            enhanced_lang = {
                **lang,
                'categories': mapping['categories'],
                'primaryCategory': mapping['primaryCategory'],
                'paradigms': get_paradigms(lang['name'], lang.get('desc', '')),
                'domains': get_domains(mapping['categories'], lang['name'], lang.get('desc', '')),
                'difficulty': mapping['difficulty'],
                'typing': get_typing_system(lang['name'], lang.get('desc', '')),
                'compilation': 'Compiled' if get_typing_system(lang['name'], lang.get('desc', '')) == 'Static' else 'Interpreted'
            }
            
            all_languages.append(enhanced_lang)
        
        print(f"Processed {filename}: {len(languages)} languages")

# Remove duplicates by name (keep first occurrence)
seen_names = set()
unique_languages = []
for lang in all_languages:
    if lang['name'] not in seen_names:
        unique_languages.append(lang)
        seen_names.add(lang['name'])

# Sort alphabetically
unique_languages.sort(key=lambda x: x['name'])

print(f"Total unique languages: {len(unique_languages)}")

# Generate JavaScript file content
js_content = f'''// Consolidated Programming Languages Collection
// Total Languages: {len(unique_languages)}
// Generated: {datetime.now().isoformat()}

var languages = {json.dumps(unique_languages, indent=4)};

// Category definitions for filtering and organization
var categoryDefinitions = {{
    "Popular": {{
        "description": "Most widely used programming languages",
        "color": "#FF6B6B"
    }},
    "Web": {{
        "description": "Languages primarily used for web development",
        "color": "#4ECDC4"
    }},
    "Systems": {{
        "description": "Low-level programming languages for system development",
        "color": "#45B7D1"
    }},
    "Functional": {{
        "description": "Languages that emphasize functional programming paradigms",
        "color": "#96CEB4"
    }},
    "Object-Oriented": {{
        "description": "Languages that support object-oriented programming",
        "color": "#FFEAA7"
    }},
    "Scripting": {{
        "description": "Languages used for automation and scripting",
        "color": "#DDA0DD"
    }},
    "Mobile": {{
        "description": "Languages for mobile application development",
        "color": "#98D8C8"
    }},
    "Data Science": {{
        "description": "Languages specialized for data analysis and statistics",
        "color": "#F7DC6F"
    }},
    "Academic": {{
        "description": "Languages used in academic and research contexts",
        "color": "#BB8FCE"
    }},
    "Legacy": {{
        "description": "Older languages still in use today",
        "color": "#F8C471"
    }},
    "Esoteric": {{
        "description": "Unusual languages created for experimentation",
        "color": "#85C1E9"
    }},
    "Emerging": {{
        "description": "New and upcoming programming languages",
        "color": "#82E0AA"
    }}
}};

// Utility functions for filtering and searching
var LanguageUtils = {{
    // Filter languages by category
    filterByCategory: function(category) {{
        return languages.filter(lang => lang.categories.includes(category));
    }},
    
    // Filter languages by difficulty
    filterByDifficulty: function(difficulty) {{
        return languages.filter(lang => lang.difficulty === difficulty);
    }},
    
    // Filter languages by paradigm
    filterByParadigm: function(paradigm) {{
        return languages.filter(lang => lang.paradigms.includes(paradigm));
    }},
    
    // Filter languages by domain
    filterByDomain: function(domain) {{
        return languages.filter(lang => lang.domains && lang.domains.includes(domain));
    }},
    
    // Search languages by name or description
    search: function(query) {{
        const lowerQuery = query.toLowerCase();
        return languages.filter(lang => 
            lang.name.toLowerCase().includes(lowerQuery) ||
            lang.desc.toLowerCase().includes(lowerQuery) ||
            lang.creator.toLowerCase().includes(lowerQuery)
        );
    }},
    
    // Get languages by decade
    filterByDecade: function(decade) {{
        const startYear = decade;
        const endYear = decade + 9;
        return languages.filter(lang => lang.year >= startYear && lang.year <= endYear);
    }},
    
    // Get statistics
    getStats: function() {{
        const stats = {{
            total: languages.length,
            byCategory: {{}},
            byDifficulty: {{}},
            byTyping: {{}},
            byDecade: {{}}
        }};
        
        languages.forEach(lang => {{
            // Count by primary category
            stats.byCategory[lang.primaryCategory] = (stats.byCategory[lang.primaryCategory] || 0) + 1;
            
            // Count by difficulty
            stats.byDifficulty[lang.difficulty] = (stats.byDifficulty[lang.difficulty] || 0) + 1;
            
            // Count by typing
            stats.byTyping[lang.typing] = (stats.byTyping[lang.typing] || 0) + 1;
            
            // Count by decade
            const decade = Math.floor(lang.year / 10) * 10;
            const decadeKey = `${{decade}}s`;
            stats.byDecade[decadeKey] = (stats.byDecade[decadeKey] || 0) + 1;
        }});
        
        return stats;
    }}
}};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{
        languages: languages,
        categoryDefinitions: categoryDefinitions,
        utils: LanguageUtils
    }};
}}
'''

# Write the consolidated file
with open('js/languages.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"✅ Successfully created js/languages.js with {len(unique_languages)} unique languages")

# Generate statistics
stats = {}
for lang in unique_languages:
    # By primary category
    cat = lang['primaryCategory']
    stats[cat] = stats.get(cat, 0) + 1

print("\n📊 Languages by Primary Category:")
for category, count in sorted(stats.items()):
    print(f"  {category}: {count}")