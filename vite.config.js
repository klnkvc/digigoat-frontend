import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import StaticCopyPlugin from 'vite-plugin-static-copy'; // Default import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    StaticCopyPlugin({
      targets: [
        {
          src: 'src/assets/*',
          dest: 'assets',
        },
        {
          src: 'src/css/*',
          dest: 'css',
        },
        {
          src: 'src/font/*',
          dest: 'font',
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
