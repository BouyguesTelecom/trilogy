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
  base: '/templates/',
  resolve: {
    extensions: ['.web.tsx', '.tsx', '.ts', '.js', '.jsx', '.d.ts', '.ttf', '.css'],
    alias: aliases.map((alias) => ({
      find: `@${alias}`,
      replacement: path.resolve(__dirname, `../lib/${alias}`),
    })),
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
  },
  publicDir: '../../packages/styles/dist/default',
  css: {
    modules: false,
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
      },
    }
  }
})
