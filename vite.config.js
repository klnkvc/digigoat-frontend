import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3726,
  },
  build: {
    outDir: 'dist',  // Tentukan folder output untuk build
    assetsDir: 'assets',  // Tentukan folder untuk menyimpan file aset statis (gambar, font, dll.)
    rollupOptions: {
      input: '/src/index.html', // Tentukan file utama yang digunakan di aplikasi Anda (jika berbeda)
    },
  },
});
