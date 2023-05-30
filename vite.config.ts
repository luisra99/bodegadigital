import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import { rollup, InputOptions, OutputOptions } from 'rollup'
import rollupPluginTypescript from 'rollup-plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import manifest from './manifest.json';

// https://vitejs.dev/config/

const CompileTsServiceWorker = () => ({
  name: 'compile-typescript-service-worker',
  async writeBundle(_options, _outputBundle) {
    const inputOptions: InputOptions = {
      input: 'src/sw-custom.ts',
      plugins: [rollupPluginTypescript(), nodeResolve()],
    }
    const outputOptions: OutputOptions = {
      file: 'dist/sw-custom.js',
      format: 'es',
    }
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
    await bundle.close()
  }
})

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
      workbox: {
        // importScripts:['sw.js'],
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
      },
    }),
    CompileTsServiceWorker()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  envPrefix: 'VITE_',
});
