import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

const version = 1;
const CACHE_NAME = `my-cache-v${version}`;
const filesToCache = ['/', '/nukes', '/profile', '/venta-regulada'];
self.__WB_MANIFEST;
precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();
clientsClaim();

// self.addEventListener('fetch', (event) => {
//   const url = new URL(event.request.url);
//   event.respondWith(
//     (async function () {
//       const cachedResponse = await caches.match(url.pathname);
//       if (cachedResponse) {
//         console.log('La url es ', url.pathname);
//         const cachestr = cachedResponse;
//         console.table(cachedResponse.bodyUsed);
//         return cachedResponse;
//       }
//       try {
//         const fetchResponse = await fetch(event.request);
//         const cache = await caches.open(CACHE_NAME);
//         cache.put(event.request, fetchResponse.clone());
//         return fetchResponse;
//       } catch (err) {
//         console.error('Error en el service worker');
//         console.error(err);
//         return new Response(null, { status: 404 });
//       }
//     })(),
//   );
// });

registerRoute(
  ({ url }) => url.origin === 'http://localhost:3000',
  new CacheFirst({
    cacheName: 'fetch-responses',
  }),
);
registerRoute(
  /.*\.(png|jpg|jpeg|svg|gif)/,
  new CacheFirst({
    cacheName: 'assets',
  }),
);
registerRoute(
  /\/*/,
  new StaleWhileRevalidate({
    cacheName: CACHE_NAME,
  }),
);

registerRoute(
  /\/profile/,
  new CacheFirst({
    cacheName: CACHE_NAME,
    plugins: [
      {
        cacheWillUpdate: async ({ request, response }) => {
          if (response) {
            const data = await response.json();
            const currentDate = new Date().toLocaleDateString();
            if (data.date !== currentDate) {
              const updatedResponse = await fetch(request);
              const updatedData = await updatedResponse.json();
              const cache = await caches.open('dataa-cache');
              await cache.put(request, new Response(JSON.stringify(updatedData)));
            }
          }
          return response;
        },
      },
    ],
  }),
);

self.addEventListener('fetch', function (event) {
  const newRequest = new Request(event.request, {
    headers: { Authorization: 'Bearer XXX-my-token' },
    mode: 'cors',
  });
  return fetch(newRequest);
});

registerRoute(
  /\/token/,
  new CacheFirst({
    cacheName: CACHE_NAME,
    expiration: {
      maxAgeSeconds: 60 * 60,
    },
  }),
);

// self.addEventListener('fetch', function (event) {
//   const url = new URL(event.request.url);
//   url.origin === 'http://localhost:3000/token';

//   // Fetch the Request with Modified Headers
//   event.respondWith(fetch(modifiedRequest));
// });
// self.addEventListener('fetch', function (event) {
//   const url = new URL(event.request.url);
//   url.origin === 'https://bodegadigital.prod.xetid.cu/wso2/api/';
//   // Add Custom Headers
//   var customHeaders = new Headers();
//   customHeaders.append('Authorization', 'Bearer myToken');

//   // Create a new Request Object with Custom Headers
//   var modifiedRequest = new Request(event.request, {
//     headers: customHeaders,
//   });

//   // Fetch the Request with Modified Headers
//   event.respondWith(fetch(modifiedRequest));
// });
