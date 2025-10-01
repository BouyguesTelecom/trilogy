import { exec } from 'child_process'
import fs from 'fs'
import glob from 'glob'
import { defineConfig } from 'tsup'
import { promisify } from 'util'

export default defineConfig({
  clean: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  outDir: 'lib',
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
    '!coverage',
    '!./components/**/*.native.tsx',
    '!./components/**/*.native.ts',
  ],
  external: ['react', 'react-native', 'react-dom'],
  tsconfig: './tsconfig.build.json',

  async onSuccess() {
    try {
      const execAsync = promisify(exec)
      await execAsync('tsc -p tsconfig.alias.json')
      const files = await glob.sync('lib/**/*.d.ts')
      await Promise.all(files.map((file) => fs.copyFileSync(file, file.replace('.d.ts', '.d.mts'))))
    } catch (err: any) {
      console.error()
      console.error('Typescript compilation error:')
      console.error()
      console.error(err.stdout || err.message || err)
      throw err
    }
  },
})
