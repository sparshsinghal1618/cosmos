import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

// COSMOS build configuration.
//  · Standard Vite layout: index.html is the entry and dist/ is the output.
//  · `BASE_PATH` sets the deployed subfolder (e.g. /cosmos/ for a GitHub Pages
//    project site); otherwise the app is served from the origin root. The same
//    value is exposed to the app as `import.meta.env.BASE_URL`, which
//    BrowserRouter uses as its basename so deep links resolve correctly.
//  · React, the router and three.js get their own long-cache chunks, and
//    Vite's built-in SPA fallback serves index.html for deep links in dev and
//    preview (a 404.html copy does the same on GitHub Pages).
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],

  // `open: true` opens the dev/preview server root (index.html).
  server: { open: true },
  preview: { open: true },

  build: {
    target: 'es2020',
    sourcemap: false,
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1100,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    rollupOptions: {
      input: resolve(rootDir, 'index.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules/@react-three')) return 'three';
          if (id.includes('node_modules/react-router')) return 'router';
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react';
          }
          return undefined;
        },
      },
    },
  },
});
