/* eslint-disable */
var CACHE_NAME = 'mern-portfolio';
// var self = this;
var urlsToCache = [
  '/',
  '/home',
  '/mern-portfolio',
  '/portfolio',
  '/contact',
  '/projects',
  '/completed'
];

// Install service worker
window.self.addEventListener('install', event => {
  // Perform the install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return the requests
window.self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return response as Cache is hit 
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update service worker
window.self.addEventListener('activate', event => {
  var cacheWhitelist = ['mern-portfolio'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
