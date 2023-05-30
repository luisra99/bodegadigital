import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

import manifest from './manifest.json';

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest,
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  // switch to "true" to enable sw on development
  devOptions: {
    enabled: true,
  },
};

pwaOptions.srcDir = 'src';
pwaOptions.filename = 'custom-service-worker.ts';
pwaOptions.strategies = 'injectManifest';
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
