import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  target: 'es6',
  format: ['cjs', 'esm'],
  outDir: 'lib',
  entry: ['./components/index.ts'],
  dts: {
    resolve: true,
  },
  external: ['react', 'react-native'],
})
