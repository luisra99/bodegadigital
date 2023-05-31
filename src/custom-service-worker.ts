import ClassNameGenerator from '@mui/utils/ClassNameGenerator/ClassNameGenerator';
import { clientsClaim } from 'workbox-core';
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope;

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

self.skipWaiting();
clientsClaim();

self.addEventListener('install', function (event:any) {
  console.log('Custom service worker installed');
});

self.addEventListener('activate', function (event:any) {
  console.log('Custom service worker activated');
});

self.addEventListener('push', function (event:any) {
  if (event.data) {
    // Retrieve the message payload sent from the server
    const message = event.data.text();

    // Do something with the message, such as display a notification
    console.log('push');
  } else {
    console.log('No payload received');
  }
});

self.addEventListener('fetch', function (event:any) {
  console.log('un fetch');
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // If the resource was found in the cache, return it
      if (response) {
        return response;
      }

      // Otherwise fetch the resource from the network
      return fetch(event.request);
    }),
  );
});
