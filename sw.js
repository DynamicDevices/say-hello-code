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

// Service Worker for caching and offline functionality

const CACHE_NAME = 'say-hello-code-v6';
const STATIC_CACHE = 'say-hello-static-v6';
const DYNAMIC_CACHE = 'say-hello-dynamic-v6';

// Static resources that don't change often
const staticUrlsToCache = [
    './',
    './css/styles.css',
    './js/performance.js',
    './js/app.js',
    './js/visualizations.js',
    './manifest.json',
    './404.html'
];

// Dynamic resources that may change frequently
const dynamicUrls = [
    './js/languages.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE).then(function(cache) {
                console.log('Opened static cache');
                return cache.addAll(staticUrlsToCache);
            }),
            caches.open(DYNAMIC_CACHE).then(function(cache) {
                console.log('Opened dynamic cache');
                return cache.addAll(dynamicUrls);
            })
        ])
    );
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
    const requestUrl = new URL(event.request.url);

    // Handle languages.js with network-first strategy
    if (requestUrl.pathname.endsWith('/js/languages.js')) {
        event.respondWith(
            fetch(event.request)
                .then(function(response) {
                    // If network request succeeds, update cache and return response
                    if (response.ok) {
                        const responseClone = response.clone();
                        caches.open(DYNAMIC_CACHE).then(function(cache) {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return response;
                })
                .catch(function() {
                    // If network fails, try to serve from cache
                    return caches.match(event.request);
                })
        );
    } else {
        // For other resources, use cache-first strategy
        event.respondWith(
            caches.match(event.request)
                .then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                })
        );
    }
});

// Clean up old caches and take control immediately
self.addEventListener('activate', function(event) {
    event.waitUntil(
        Promise.all([
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            self.clients.claim() // Take control of all pages immediately
        ])
    );
});