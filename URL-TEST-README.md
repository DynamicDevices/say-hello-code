# URL Testing Script

This script tests all language reference URLs used in the Say Hello Code website to identify broken or inaccessible links.

## Usage

```bash
node test-urls.js
```

## Features

- Tests all 242+ language reference URLs
- Checks HTTP status codes and accessibility
- Handles timeouts and network errors
- Generates detailed console output with status indicators
- Creates a JSON report file with detailed results
- Processes URLs in batches to avoid overwhelming servers

## Output Indicators

- ✅ **Successful** - URL returns 2xx status code
- 🔄 **Redirected** - URL returns 3xx status code (still accessible)
- ⏰ **Timeout** - Request timed out after 10 seconds
- ❌ **Failed** - URL returns 4xx/5xx status code or network error

## Generated Files

- `url-test-results.txt` - Complete console output
- `url-test-report.json` - Structured JSON report with summary and error details

## Recent Test Results

**Test Date:** July 8, 2025  
**Total URLs:** 242  
**Success Rate:** 97.1% (235/242)

### Failed URLs (4):
1. **Ada** - `https://www.adaic.org/resources/add_content/standards/ada12/html/Ada12_RM.html` (Connection error)
2. **MATLAB** - `https://www.mathworks.com/help/matlab/` (403 Forbidden)
3. **WebAssembly** - `https://webassembly.org/docs/` (404 Not Found)
4. **AutoHotkey** - `https://www.autohotkey.com/docs/` (403 Forbidden)

### Timeout URLs (3):
- AWK, Expect, and one other language experienced timeouts

## Recommendations

The failed URLs should be updated in `js/app.js` in the `referenceUrls` object:

```javascript
// Suggested fixes:
'Ada': 'https://ada-lang.io/docs/',
'MATLAB': 'https://www.mathworks.com/help/',
'WebAssembly': 'https://webassembly.org/getting-started/',
'AutoHotkey': 'https://www.autohotkey.com/docs/v2/',
```

## License

This script is part of the Say Hello Code project and is licensed under the Creative Commons Attribution 4.0 International License.