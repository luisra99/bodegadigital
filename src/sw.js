const CACHE_NAME = 'my-cache-v2';
self.__WB_MANIFEST;
self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async function () {
      console.log('La url es ', event.request.url);
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        let url= event.request.url.
        if(url.contain)
        console.table(cachedResponse)
        return cachedResponse;
      }
      try {
        const fetchResponse = await fetch(event.request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      } catch (err) {
        console.error(err);
        return new Response('<h1>Oops! Something went wrong.</h1>', {
          headers: { 'Content-Type': 'text/html' },
        });
      }
    })(),
  );
});
