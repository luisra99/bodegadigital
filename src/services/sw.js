import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(({ url }) => url.origin === 'https://bodegadigital.vercel.app', new CacheFirst());

self.addEventListener('fetch', (ev) => {
  ev.respondWith(CacheFirst(ev))
});
