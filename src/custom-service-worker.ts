/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
import ClassNameGenerator from '@mui/utils/ClassNameGenerator/ClassNameGenerator';

import { clientsClaim } from 'workbox-core';
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

declare let sw: ServiceWorkerGlobalScope;

// self.__WB_MANIFEST is default injection point
precacheAndRoute(sw.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

sw.skipWaiting();
clientsClaim();

sw.addEventListener('install', function (event: any) {
  event.waitUntil(
    caches.open('my-cache').then(function (cache) {
      return cache.addAll([
        '/', // Add the root path
        // Add more paths as needed
      ]);
    }),
  );
  console.log('Custom service worker installed');
});

sw.addEventListener('activate', function (event: any) {
  console.log('Custom service worker activated');
});

sw.addEventListener('push', function (event: any) {
  if (event.data) {
    // Retrieve the message payload sent from the server
    const message = event.data.text();

    // Do something with the message, such as display a notification
    console.log('push');
  } else {
    console.log('No payload received');
  }
});

sw.addEventListener('fetch', function (event: any) {
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
