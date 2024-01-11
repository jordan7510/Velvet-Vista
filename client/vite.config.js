import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: "http://localhost:3500",
        changeOrigin: true,
        ws: true,
        secure: false,
        credentials: 'include',
      }
    }
  },
  plugins: [react()],
})
