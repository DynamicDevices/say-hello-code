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
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
})();