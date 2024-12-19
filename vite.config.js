import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginCopy from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    VitePluginCopy({
      targets: [
        { src: 'src/assets/*', dest: 'dist/assets' },
        { src: 'src/css/*', dest: 'dist/css' },
        { src: 'src/fonts/*', dest: 'dist/fonts' },
        { src: 'src/components/*', dest: 'dist/component' },
        { src: 'src/pages/*', dest: 'dist/pages' },
      ],
      hook: 'buildEnd',  // Mengatur hook setelah build selesai
    })
  ],
  server: {
    port: 3726,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
