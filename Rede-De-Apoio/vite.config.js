import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'jacki-monitorial-undesirably.ngrok-free.dev'
    ]
  }
})
