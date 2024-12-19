import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3726, // Port untuk pengembangan lokal
  },
  base: '/',  // Base path jika aplikasi berada di subfolder
})
