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

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  event.respondWith(
    (async function () {
      const cachedResponse = await caches.match(url.pathname);
      if (cachedResponse) {
        console.log('La url es ', url.pathname);
        const cachestr = cachedResponse;
        console.table(cachedResponse.bodyUsed);
        return cachedResponse;
      }
      try {
        const fetchResponse = await fetch(event.request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      } catch (err) {
        console.error('Error en el service worker');
        console.error(err);
        return new Response(null, { status: 404 });
      }
    })(),
  );
});

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
