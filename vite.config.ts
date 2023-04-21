// vite.config.ts

import { defineConfig } from 'vite'
import { resolve } from 'path'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig(({ command }) => {
  const config = {
    base: command === 'serve' ? '' : '/assets',
    plugins: [
      RubyPlugin(),
    ],
    build: {
      manifest: true,
      outDir: resolve(__dirname, '../../public/assets'),
      rollupOptions: {
        input: {
          app: resolve(__dirname, 'frontend/application.js'),
        },
      },
    },
  }

  return config
})
