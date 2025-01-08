import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

const aliases = [
  'components',
  'config',
  'context',
  'events',
  'helpers',
  'objects',
  'services',
  'styles',
  'views',
  'assets/*',
]

export default defineConfig({
  resolve: {
    extensions: ['.web.tsx', '.tsx', '.ts', '.js', '.jsx', '.d.ts', '.ttf', '.css'],
    alias: [
      ...aliases.map((alias) => ({
        find: `@${alias}`,
        replacement: path.resolve(__dirname, `../lib/${alias}`),
      })),
      {
        find: 'react-native',
        replacement: 'react-native-web'
      }
    ],
  },
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    exclude: ['react-native'],
  },
  server: {
    open: true,
  },
  publicDir: '../../packages/styles/dist/default',
  css: {
    modules: false,
  },
})
