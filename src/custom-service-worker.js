self.addEventListener('install', function(event) {
  console.log('Custom service worker installed');
});

self.addEventListener('activate', function(event) {
  console.log('Custom service worker activated');
});