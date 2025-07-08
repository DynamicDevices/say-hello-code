# Say Hello Code - Project Reference Guide

## Project Overview
**Say Hello Code** (sayhellocode.com) is a comprehensive collection of "Hello, World!" programs in 240+ programming languages, designed to help students and programmers explore the programming language landscape.

## Key Files & Structure
```
├── index.html              # Main webpage with search/filter UI
├── js/
│   ├── languages.js        # Core data: 240+ language entries with code examples
│   ├── app.js             # Frontend logic: search, filter, render, deduplication
│   └── performance.js     # Performance monitoring
├── css/styles.css         # Responsive styling, dark theme
├── sw.js                  # Service worker for PWA/offline support
├── test-urls.js           # URL accessibility testing script
└── .github/workflows/     # CI/CD automation
    ├── deploy.yml         # Deploy to GitHub Pages with URL testing
    └── url-test.yml       # Standalone URL testing (daily + PR)
```

## Core Data Structure (languages.js)
Each language entry contains:
```javascript
{
    "name": "Python",
    "year": 1991,
    "creator": "Guido van Rossum",
    "code": "print(\"Hello, World!\")",
    "desc": "Description of the language...",
    "popularity": 95,
    "categories": ["Scripting", "General Purpose"],
    "primaryCategory": "Scripting",
    "paradigms": ["Object-oriented", "Imperative"],
    "domains": ["Web Development", "Data Science"],
    "difficulty": "Beginner",
    "typing": "Dynamic",
    "sourceFile": "popular-languages.js"
}
```

## Key Features
- **Search & Filter**: By name, category, paradigm, difficulty, typing
- **Copy-to-clipboard**: For all code examples
- **Reference Links**: Auto-generated documentation links
- **PWA Support**: Offline functionality, installable
- **Responsive Design**: Mobile-friendly interface
- **URL Testing**: Automated link validation in CI

## Critical Technical Details

### Deduplication Logic (app.js)
**IMPORTANT**: The deduplication function preserves special characters:
```javascript
// Correct normalization - preserves #, +, -, .
normalizedName = normalizedName
    .replace(/\s+/g, '')           // Remove spaces
    .replace(/[^\w#\+\-\.]/g, ''); // Keep important chars
```
**Why**: Prevents C#/C++/F# from being treated as duplicates of C.

### URL Testing (test-urls.js)
- **Timeout**: 15 seconds (increased from 5s to reduce false timeouts)
- **Batch Processing**: 20 URLs at a time with 1s delays
- **CI Integration**: Runs on push/PR, generates reports, comments on PRs

### Reference Link Generation (app.js)
Uses `baseUrls` object for known languages, falls back to Google search for others.

## Common Tasks

### Adding a New Language
1. Add entry to `js/languages.js` following the structure above
2. Optionally add reference URL to `baseUrls` in `js/app.js`
3. Test locally, commit, and push

### Fixing Missing Languages
- Check deduplication logic if languages disappear
- Verify no syntax errors in languages.js
- Test with: `node -e "require('./js/languages.js'); console.log(languages.length)"`

### URL Testing Issues
- Increase timeout in `test-urls.js` if many timeouts
- Check CI artifacts for detailed reports
- Failed URLs auto-create GitHub issues

## Deployment
- **Host**: GitHub Pages
- **Domain**: sayhellocode.com (custom domain)
- **CI**: Auto-deploys on push to main after URL testing passes
- **CDN**: Cloudflare (implied by custom domain)

## License & Attribution
- **License**: Creative Commons Attribution 4.0 International
- **Attribution Required**: Yes, with link to license
- **Commercial Use**: Allowed with attribution

## Recent Critical Fixes
- **Assembly Language Dates**: Corrected to reflect Kathleen Booth's 1947 invention
- **C#/C++ Restoration**: Fixed deduplication bug that was removing languages with special characters
- **URL Testing**: Improved timeout and reliability settings

## Quick Debug Commands
```bash
# Test language loading
node -e "require('./js/languages.js'); console.log('Languages:', languages.length)"

# Test URL accessibility
node test-urls.js

# Local development server
python3 -m http.server 8000
```

## Key Contacts/Contributors
- **Original Creator**: Faisal Shahzad Khan
- **Contributors**: Andy Stanford-Clark, Dynamic Devices Ltd
- **AI Assistant**: Claude.ai (mentioned in footer)

---
*Use this reference to quickly understand the project structure, common issues, and maintenance tasks.*