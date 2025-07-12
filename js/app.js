
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

// baseUrls is imported from js/language-urls.js and available as a global variable

// Generate reference link for a programming language
function generateReferenceLink(languageName) {
    // baseUrls is now imported from js/language-urls.js
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