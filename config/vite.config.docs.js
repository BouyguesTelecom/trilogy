import { defineConfig } from 'vite'

export default defineConfig({
  root: 'docs',
  publicDir: '../public',
  server: {
    open: true,
  },
})
