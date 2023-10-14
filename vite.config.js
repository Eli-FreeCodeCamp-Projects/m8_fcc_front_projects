import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './docs',
    emptyOutDir: true
  },
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.js'
  },
  //base: '/m8_fcc_front_projects/'
})
