#!/usr/bin/env node

/*
 * Say Hello Code - URL Testing Script
 * 
 * This work is licensed under the Creative Commons Attribution 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/
 * or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 * 
 * Created by: Faisal Shahzad Khan
 * Website: https://sayhellocode.com
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');
const fs = require('fs');

// Import the languages data by requiring the module directly
let languages;
try {
    languages = require('./js/languages.js');
} catch (error) {
    console.error('Error loading languages module:', error.message);
    
    try {
        const languagesData = fs.readFileSync('./js/languages.js', 'utf8');
        let languagesMatch = languagesData.match(/var languages = (\[[\s\S]*?\]);/);
        
        if (!languagesMatch) {
            throw new Error('Could not extract languages array from languages.js');
        }
        
        languages = new Function('return ' + languagesMatch[1])();
    } catch (parseError) {
        console.error('Error parsing languages data:', parseError.message);
        process.exit(1);
    }
}

// Extract the baseUrls from app.js to use as single source of truth
function extractBaseUrlsFromAppJs() {
    try {
        const appJsContent = fs.readFileSync('./js/app.js', 'utf8');
        const baseUrlsMatch = appJsContent.match(/var baseUrls = \{([\s\S]*?)\};/);
        
        if (!baseUrlsMatch) {
            throw new Error('Could not extract baseUrls from app.js');
        }
        
        const baseUrlsString = `({${baseUrlsMatch[1]}})`;
        const baseUrls = new Function('return ' + baseUrlsString)();
        
        return baseUrls;
    } catch (error) {
        console.error('Error extracting baseUrls from app.js:', error.message);
        process.exit(1);
    }
}

// Generate reference link using the same logic as app.js
function generateReferenceLink(languageName, baseUrls) {
    if (baseUrls[languageName]) {
        return baseUrls[languageName];
    }
    
    const searchQuery = encodeURIComponent(languageName + ' programming language documentation');
    return `https://www.google.com/search?q=${searchQuery}`;
}

// Function to check if a URL is accessible
function checkUrl(url) {
    return new Promise((resolve) => {
        const urlObj = new URL(url);
        const client = urlObj.protocol === 'https:' ? https : http;
        
        const options = {
            hostname: urlObj.hostname,
            port: urlObj.port,
            path: urlObj.pathname + urlObj.search,
            method: 'HEAD',
            timeout: 5000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; SayHelloCode-URLTester/1.0)'
            }
        };
        
        const req = client.request(options, (res) => {
            resolve({
                status: res.statusCode,
                error: null
            });
        });
        
        req.on('error', (error) => {
            resolve({
                status: null,
                error: error.message
            });
        });
        
        req.on('timeout', () => {
            req.destroy();
            resolve({
                status: null,
                error: 'timeout'
            });
        });
        
        req.end();
    });
}

// Function to test all URLs with parallel processing
async function testAllUrls() {
    console.log('🔍 Testing Language Reference URLs');
    console.log('==================================================');
    console.log(`Total languages to test: ${languages.length}`);
    console.log('==================================================');
    
    const baseUrls = extractBaseUrlsFromAppJs();
    
    const results = {
        timestamp: new Date().toISOString(),
        summary: {
            total: languages.length,
            successful: 0,
            failed: 0,
            redirected: 0,
            timeout: 0,
            errors: []
        },
        details: []
    };
    
    // Create test promises for parallel execution
    const testPromises = languages.map(async (language, index) => {
        const url = generateReferenceLink(language.name, baseUrls);
        
        try {
            const result = await checkUrl(url);
            
            let status = '❌';
            let statusText = 'FAILED';
            let isSuccessful = false;
            let isRedirect = false;
            
            if (result.error === 'timeout') {
                status = '⏰';
                statusText = 'TIMEOUT';
            } else if (result.error) {
                status = '❌';
                statusText = 'ERROR';
            } else if (result.status >= 200 && result.status < 300) {
                status = '✅';
                statusText = result.status;
                isSuccessful = true;
            } else if (result.status >= 300 && result.status < 400) {
                status = '✅';
                statusText = result.status;
                isSuccessful = true;
                isRedirect = true;
            } else {
                status = '❌';
                statusText = result.status;
            }
            
            return {
                language: language.name,
                url: url,
                result: result,
                status: status,
                statusText: statusText,
                isSuccessful: isSuccessful,
                isRedirect: isRedirect,
                index: index
            };
            
        } catch (error) {
            return {
                language: language.name,
                url: url,
                result: { error: error.message, status: null },
                status: '❌',
                statusText: 'ERROR',
                isSuccessful: false,
                isRedirect: false,
                index: index
            };
        }
    });
    
    // Execute tests in batches
    const BATCH_SIZE = 20;
    const allResults = [];
    
    for (let i = 0; i < testPromises.length; i += BATCH_SIZE) {
        const batch = testPromises.slice(i, i + BATCH_SIZE);
        const batchResults = await Promise.all(batch);
        allResults.push(...batchResults);
        
        if (i + BATCH_SIZE < testPromises.length) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    
    // Sort results by original index
    allResults.sort((a, b) => a.index - b.index);
    
    // Process results and update summary
    allResults.forEach(testResult => {
        const { language, url, result, status, statusText, isSuccessful, isRedirect } = testResult;
        
        if (result.error === 'timeout') {
            results.summary.timeout++;
        } else if (result.error || (result.status && (result.status < 200 || result.status >= 400))) {
            results.summary.failed++;
            results.summary.errors.push({
                language: language,
                url: url,
                error: result.error,
                status: result.status
            });
        } else if (isSuccessful) {
            results.summary.successful++;
            if (isRedirect) {
                results.summary.redirected++;
            }
        }
        
        const languageName = language.padEnd(20);
        const statusDisplay = statusText.toString().padEnd(3);
        console.log(`${status} ${languageName} | ${statusDisplay} | ${url}`);
        
        if (result.error && result.error !== 'timeout') {
            console.log(`   Error: ${result.error}`);
        }
        
        results.details.push({
            language: language,
            url: url,
            error: result.error,
            status: result.status
        });
    });
    
    // Print summary
    console.log('\n==================================================');
    console.log('📊 SUMMARY');
    console.log('==================================================');
    console.log(`Total URLs tested: ${results.summary.total}`);
    console.log(`✅ Successful: ${results.summary.successful} (${(results.summary.successful/results.summary.total*100).toFixed(1)}%)`);
    console.log(`🔄 Redirected: ${results.summary.redirected} (${(results.summary.redirected/results.summary.total*100).toFixed(1)}%)`);
    console.log(`⏰ Timeout: ${results.summary.timeout} (${(results.summary.timeout/results.summary.total*100).toFixed(1)}%)`);
    console.log(`❌ Failed: ${results.summary.failed} (${(results.summary.failed/results.summary.total*100).toFixed(1)}%)`);
    
    if (results.summary.errors.length > 0) {
        console.log('\n==================================================');
        console.log('❌ FAILED URLS');
        console.log('==================================================');
        
        results.summary.errors.forEach(error => {
            console.log(`${error.language}: ${error.url}`);
            console.log(`  Status: ${error.status || 'N/A'}`);
            console.log(`  Error: ${error.error || 'Unknown error'}`);
            console.log('');
        });
    }
    
    const reportFile = 'url-test-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
    console.log(`📄 Detailed report saved to: ${reportFile}`);
    
    return results;
}

// Run the test if this script is executed directly
if (require.main === module) {
    testAllUrls().catch(console.error);
}

module.exports = { testAllUrls, checkUrl, generateReferenceLink, extractBaseUrlsFromAppJs };