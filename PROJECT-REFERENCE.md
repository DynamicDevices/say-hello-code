
# Say Hello Code - Project Reference

**Say Hello Code** (sayhellocode.com) - "Hello, World!" programs in 240+ programming languages.

## Repository
```bash
git remote -v
origin  git@github.com:DynamicDevices/say-hello-code.git (fetch)
origin  git@github.com:DynamicDevices/say-hello-code.git (push)
```

## File Structure
```
├── index.html              # Main webpage
├── js/
│   ├── languages.js        # Core data: 240+ language entries
│   └── app.js             # Frontend logic + deduplication
├── css/styles.css         # Styling
├── sw.js                  # Service worker (PWA)
├── test-urls.js           # URL testing script
└── .github/workflows/     # CI/CD
```

## Language Data Structure
```javascript
{
    "name": "Python",
    "year": 1991,
    "creator": "Guido van Rossum",
    "code": "print(\"Hello, World!\")",
    "desc": "Description...",
    "popularity": 95,
    "categories": ["Scripting"],
    "primaryCategory": "Scripting",
    "paradigms": ["Object-oriented"],
    "domains": ["Web Development"],
    "difficulty": "Beginner",
    "typing": "Dynamic"
}
```

## Critical Technical Details

### ⚠️ Deduplication Logic (app.js)
**MUST preserve special characters** to prevent C#/C++/F# being treated as duplicates of C:
```javascript
normalizedName = normalizedName
    .replace(/\s+/g, '')           // Remove spaces
    .replace(/[^\w#\+\-\.]/g, ''); // Keep #, +, -, .
```

### URL Testing (test-urls.js)
- **Timeout**: 60 seconds
- **Batch**: 20 URLs at a time with 1s delays
- **CI**: Auto-runs on push/PR, creates issues for failures

### Reference Links (app.js)
Uses `baseUrls` object for known languages, Google search fallback for others.

## Common Tasks

### Add New Language
1. Add entry to `js/languages.js`
2. Optionally add URL to `baseUrls` in `js/app.js`
3. Test: `node -e "require('./js/languages.js'); console.log(languages.length)"`

### Fix Missing Languages
- Check deduplication logic if languages disappear
- Verify no syntax errors in languages.js

### Fix URL Issues
- Update `baseUrls` in `js/app.js`
- Test: `node test-urls.js`
- Check CI artifacts for detailed reports

### Recent URL Fixes (December 2024)
**Fixed 16 broken/timeout URLs achieving 100% success rate:**
- **Broken URLs Fixed**: ActionScript, MATLAB, Ksh, Oberon, Ook!, V, Xamarin, Deno, Batch, X10, Creole
- **Timeout Issues Resolved**: AWK, Bash, Makefile, Octave, Sed (GNU.org sites replaced with faster alternatives)
- **Timeout Setting**: Increased from 15s to 60s for better reliability
- **Strategy**: Prioritized best available documentation sources regardless of year
- **Result**: 242/242 URLs working (100% success rate, 0 timeouts, 0 failures)

**Key Replacements Made:**
- GNU.org URLs → Alternative sources (TutorialsPoint, W3Schools, Wikipedia, official sites)
- Adobe ActionScript → AIR SDK documentation
- MathWorks MATLAB → Wikipedia (403 bypass)
- Various 404s → Current working documentation

### Bot-Restricted URLs (403 Handling)
**New Feature**: 403 Forbidden errors are now treated as informational warnings rather than failures:
- **Rationale**: 403 errors are typically due to bot/automated access restrictions, not broken URLs
- **Behavior**: URLs returning 403 are logged separately and don't cause CI failures
- **Display**: Shows with 🤖 icon and "Bot Restricted" category in summary
- **Exit Code**: Script exits with success (0) even with 403 errors present
- **Use Case**: Allows human users to access URLs that block automated requests

## Deployment
- **Host**: GitHub Pages
- **Domain**: sayhellocode.com (Cloudflare CDN)
- **CI**: Auto-deploys after URL testing passes

## Debug Commands
```bash
# Test language loading
node -e "require('./js/languages.js'); console.log('Languages:', languages.length)"

# Test URLs
node test-urls.js

# Local server
python3 -m http.server 8000
```

## License
Creative Commons Attribution 4.0 International - Commercial use allowed with attribution.

## Contributors
- **Creator**: Faisal Shahzad Khan
- **Contributors**: Andy Stanford-Clark, Dynamic Devices Ltd, [Jim Hunt (V2G-Ltd)](https://github.com/V2G-Ltd)
- **AI Assistant**: Claude.ai