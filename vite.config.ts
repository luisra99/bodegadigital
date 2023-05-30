import { nodeResolve } from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';
import * as fs from 'fs';
import * as path from 'path';
import { rollup, InputOptions, OutputOptions } from 'rollup';
import rollupPluginTypescript from 'rollup-plugin-typescript';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { GenerateSWOptions } from 'workbox-build';

import manifest from './manifest.json';

// https://vitejs.dev/config/
const generateSWOptions: GenerateSWOptions = {
  importScripts: ['./src/custom-service-worker.js'],
  globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
  swDest: 'sw.js',
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: true,
      },
      workbox: generateSWOptions,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  envPrefix: 'VITE_',
});
