import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  outDir: 'lib/components',
  entry: [
    '.',
    '!./components/**/*.stories.tsx',
    '!./components/**/test',
    '!node_modules',
    '!tsconfig.*',
    '!*.md',
    '!./lib',
    '!version.json',
    '!babel.config.cjs',
    '!custom.d.ts',
    '!jest*',
    '!tsup.config.ts',
    '!package.json',
    '!snapshotResolver.ts',
  ],
  external: ['react', 'react-native'],
  tsconfig: './tsconfig.build.json',
  shims: true,
  splitting: false,
  bundle: false,
})
