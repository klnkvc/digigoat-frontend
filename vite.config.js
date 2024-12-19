import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-assets',
      buildStart() {
        const srcDir = path.resolve(__dirname, 'src');
        const distDir = path.resolve(__dirname, 'dist');

        // Daftar file dan folder yang ingin disalin
        const directoriesToCopy = ['assets', 'css', 'font', 'components', 'pages'];

        directoriesToCopy.forEach(dir => {
          const sourceDir = path.join(srcDir, dir);
          const destDir = path.join(distDir, dir);

          if (fs.existsSync(sourceDir)) {
            // Membuat folder tujuan jika belum ada
            fs.mkdirSync(destDir, { recursive: true });

            // Menyalin file dari src ke dist
            fs.readdirSync(sourceDir).forEach(file => {
              const srcFile = path.join(sourceDir, file);
              const destFile = path.join(destDir, file);
              fs.copyFileSync(srcFile, destFile);
            });
          }
        });
      },
    },
  ],
  server: {
    port: 3726,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
