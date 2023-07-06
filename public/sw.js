import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

const version = 1;
const CACHE_NAME = `my-cache-v${version}`;

self.__WB_MANIFEST;
precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();
clientsClaim();

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