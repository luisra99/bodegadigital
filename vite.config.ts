import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { VitePWA,ResolvedVitePWAOptions } from 'vite-plugin-pwa';

import manifest from './manifest.json';

const pwaOptions: Partial<ResolvedVitePWAOptions> = {
  registerType: 'autoUpdate',
  strategies: 'injectManifest',
  manifest,
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  // switch to "true" to enable sw on development
  devOptions: {
    enabled: true,
  },
  swSrc:'public',
  swDest:'dist'
};
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  envPrefix: 'VITE_',
});
