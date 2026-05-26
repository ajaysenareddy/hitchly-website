import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'privacy-policy': resolve(__dirname, 'privacy-policy/index.html'),
        'delete-account': resolve(__dirname, 'delete-account/index.html'),
      },
    },
  },
})
