import { defineConfig } from 'vite'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsconfigPaths()],
    root: resolve(__dirname, 'src/'),
    base: './',
    mode: 'production',
    build: {
        outDir: '../lib',
        lib: {
            entry: resolve(__dirname, 'src/app.ts'),
            name: 'trilogy-ds-vanilla',
            fileName: () => `trilogy-ds-vanilla.js`,
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/app.ts'),
            },
        },
    }
})
