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

// Performance monitoring and service worker registration
(function() {
    'use strict';
    
    // Performance metrics
    function measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
                    
                    console.log('Performance Metrics:', {
                        'Page Load Time': loadTime + 'ms',
                        'DOM Content Loaded': domContentLoaded + 'ms',
                        'Total Languages': allLanguages ? allLanguages.length : 0
                    });
                }, 0);
            });
        }
    }
    
    // Error tracking
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.message, 'at', e.filename + ':' + e.lineno + ':' + e.colno);
    });
    
    // Initialize performance monitoring
    measurePerformance();
    
    // Service Worker registration for caching (GitHub Pages compatible)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('./sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);

                    // Check for updates every time the page loads
                    registration.addEventListener('updatefound', function() {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', function() {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                console.log('New service worker available, refreshing...');
                                window.location.reload();
                            }
                        });
                    });
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    // Manual cache clearing function (for debugging)
    window.clearSiteCache = function() {
        if ('caches' in window) {
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        console.log('Deleting cache:', cacheName);
                        return caches.delete(cacheName);
                    })
                );
            }).then(function() {
                console.log('All caches cleared. Reloading page...');
                window.location.reload(true);
            });
        }

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                    registration.unregister();
                }
            });
        }
    };

    // Display cache clear instructions in console
    console.log('💡 If you\'re not seeing updated language data, run: clearSiteCache()');
})();