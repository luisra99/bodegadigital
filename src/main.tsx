import welcome from '@/utils/welcome';

// Root contains the main dependencies and providers of the base app
//  - React, ReactDom, RecoilRoot, HelmetProvider, ThemeProvider, MUI-core)
// App contains the main structure of the base app

// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2 multiplexing) we can load them in parallel
// and achieve the best possible performance
// document.addEventListener('DOMContentLoaded',()=>{
//   if('serviceWorker' in navigator)
//   navigator.serviceWorker.register('./service/sw.js')
// })
Promise.all([import('@/Root'), import('@/App')]).then(([{ default: render }, { default: App }]) => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('./sw.js');
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      } catch (err) {
        console.log('ServiceWorker registration failed: ', err);
      }
    });
  }
  render(App);
});

// welcome message for users in the console
welcome();

// ts(1208)
export {};
