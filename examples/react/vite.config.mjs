import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const monorepoRoot = path.resolve(projectRoot, '../..')

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/templates/' : '/',
  root: projectRoot,
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: [
      { find: /^react-native$/, replacement: 'react-native-web' },
      { find: /^@\//, replacement: `${path.join(projectRoot, 'src')}/` },
    ],
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  optimizeDeps: {
    include: ['tslib'],
  },
  server: {
    host: '0.0.0.0',
    open: true,
    fs: {
      allow: [monorepoRoot],
    },
  },
  build: {
    outDir: path.join(projectRoot, 'dist-web'),
    emptyOutDir: true,
  },
}))
