import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  resolve: {
    extensions: ['.web.tsx', '.tsx', '.ts', '.js', '.jsx', '.d.ts', '.ttf', '.css'],
  },
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    exclude: ['react-native'],
  },
  server: {
    open: true,
  },
  css: {
    modules: false,
  },
})
