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
            timeout: 60000, // Increased from 15000 to 60000 (60 seconds)
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
            await new Promise(resolve => setTimeout(resolve, 1000)); // Increased from 500ms to 1000ms
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
    
    // Enhanced broken links output
    if (results.summary.errors.length > 0) {
        console.log('\n==================================================');
        console.log('🚨 BROKEN LINKS DETECTED');
        console.log('==================================================');
        console.log(`Found ${results.summary.errors.length} broken link(s) that need attention:\n`);
        
        // Group errors by type for better organization
        const errorsByType = {
            timeout: [],
            networkError: [],
            httpError: []
        };
        
        results.summary.errors.forEach(error => {
            if (error.error === 'timeout') {
                errorsByType.timeout.push(error);
            } else if (error.error && !error.status) {
                errorsByType.networkError.push(error);
            } else {
                errorsByType.httpError.push(error);
            }
        });
        
        // Display timeout errors
        if (errorsByType.timeout.length > 0) {
            console.log('⏰ TIMEOUT ERRORS:');
            console.log('─'.repeat(50));
            errorsByType.timeout.forEach((error, index) => {
                console.log(`${index + 1}. ${error.language}`);
                console.log(`   URL: ${error.url}`);
                console.log(`   Issue: Request timed out after 15 seconds`);
                console.log('');
            });
        }
        
        // Display network errors
        if (errorsByType.networkError.length > 0) {
            console.log('🌐 NETWORK ERRORS:');
            console.log('─'.repeat(50));
            errorsByType.networkError.forEach((error, index) => {
                console.log(`${index + 1}. ${error.language}`);
                console.log(`   URL: ${error.url}`);
                console.log(`   Issue: ${error.error}`);
                console.log('');
            });
        }
        
        // Display HTTP errors
        if (errorsByType.httpError.length > 0) {
            console.log('🔗 HTTP ERRORS:');
            console.log('─'.repeat(50));
            errorsByType.httpError.forEach((error, index) => {
                console.log(`${index + 1}. ${error.language}`);
                console.log(`   URL: ${error.url}`);
                console.log(`   Status: ${error.status}`);
                console.log(`   Issue: ${getHttpErrorDescription(error.status)}`);
                console.log('');
            });
        }
        
        console.log('==================================================');
        console.log('🔧 RECOMMENDED ACTIONS:');
        console.log('==================================================');
        console.log('1. Review the broken URLs listed above');
        console.log('2. Update the baseUrls object in js/app.js with working URLs');
        console.log('3. Test fixes locally with: node test-urls.js');
        console.log('4. Consider adding fallback URLs for frequently broken links');
        console.log('');
        
        // Output broken links in a format easy to copy/paste
        console.log('📋 BROKEN URLS (Copy/Paste Format):');
        console.log('─'.repeat(50));
        results.summary.errors.forEach(error => {
            console.log(`${error.language}: ${error.url}`);
        });
        console.log('');
    } else {
        console.log('\n🎉 All URLs are working correctly!');
    }
    
    const reportFile = 'url-test-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
    console.log(`📄 Detailed report saved to: ${reportFile}`);
    
    return results;
}

// Helper function to get human-readable HTTP error descriptions
function getHttpErrorDescription(statusCode) {
    const descriptions = {
        400: 'Bad Request - The server cannot process the request',
        401: 'Unauthorized - Authentication required',
        403: 'Forbidden - Access denied',
        404: 'Not Found - The requested resource does not exist',
        405: 'Method Not Allowed - HTTP method not supported',
        408: 'Request Timeout - Server timed out waiting for request',
        429: 'Too Many Requests - Rate limit exceeded',
        500: 'Internal Server Error - Server encountered an error',
        502: 'Bad Gateway - Invalid response from upstream server',
        503: 'Service Unavailable - Server temporarily unavailable',
        504: 'Gateway Timeout - Upstream server timed out'
    };
    
    return descriptions[statusCode] || `HTTP ${statusCode} error`;
}

// Run the test if this script is executed directly
if (require.main === module) {
    testAllUrls().catch(console.error);
}

module.exports = { testAllUrls, checkUrl, generateReferenceLink, extractBaseUrlsFromAppJs };