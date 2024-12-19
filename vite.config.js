import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginStaticCopy from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginStaticCopy({
      targets: [
        {
          src: 'src/assets/*',  // Sesuaikan dengan lokasi file yang dibutuhkan
          dest: 'assets',  // Menyalin ke dalam folder dist/assets
        },
        {
          src: 'src/css/*',
          dest: 'css',  // Menyalin CSS ke dalam folder dist/css
        },
        {
          src: 'src/font/*',
          dest: 'font',  // Menyalin font ke dalam folder dist/font
        },
      ],
    }),
  ],
  server: {
    port: 3726,
  },
  build: {
    outDir: 'dist', // Output build ke folder dist
    emptyOutDir: true, // Menghapus konten lama di dist/
  },
});
