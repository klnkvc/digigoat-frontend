import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3726,
  },
  build: {
    outDir: 'dist', // Pastikan build menghasilkan ke folder dist
  }
})
