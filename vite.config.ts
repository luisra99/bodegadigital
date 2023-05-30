import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

import manifest from './manifest.json';

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  strategies: 'injectManifest',
  manifest,
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  // switch to "true" to enable sw on development
  devOptions: {
    enabled: true,
  },
  filename: 'custom-service-worker.ts',
};
pwaOptions.srcDir = 'src';
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
