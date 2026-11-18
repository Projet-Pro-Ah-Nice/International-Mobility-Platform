/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Reads frontend/.env* files. The '' prefix loads every variable, not only VITE_*;
  // these values are used by the dev server only and are never shipped in the bundle.
  const env = loadEnv(mode, process.cwd(), '')
  const backendHost = env.BACKEND_HOST || 'localhost'
  const backendPort = env.BACKEND_PORT || '3000'

  return {
    plugins: [react()],
    server: {
      // Mirrors the nginx /api rule: /api/users -> http://<host>:<port>/users
      proxy: {
        '/api': {
          target: `http://${backendHost}:${backendPort}`,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
  }
})
