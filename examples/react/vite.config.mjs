import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const monorepoRoot = path.resolve(projectRoot, '../..')
const trilogyRoot = path.join(monorepoRoot, 'packages/react')

const trilogySourcePlugin = (development) => ({
  name: 'trilogy-source',
  enforce: 'pre',
  async resolveId(source, importer) {
    if (development && source === '@trilogy-ds/react') {
      return this.resolve(path.join(trilogyRoot, 'index.ts'), importer, { skipSelf: true })
    }

    if (source.startsWith('@/')) {
      const root = importer?.startsWith(`${trilogyRoot}/`) ? trilogyRoot : path.join(projectRoot, 'src')
      return this.resolve(path.join(root, source.slice(2)), importer, { skipSelf: true })
    }
  },
})

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/templates/' : '/',
  root: projectRoot,
  plugins: [trilogySourcePlugin(command === 'serve'), react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: [
      { find: /^react-native$/, replacement: 'react-native-web' },
    ],
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  optimizeDeps: {
    include: ['tslib'],
    exclude: ['@trilogy-ds/react'],
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
