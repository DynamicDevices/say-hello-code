// Performance monitoring and analytics
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
        console.error('JavaScript Error:', {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno
        });
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