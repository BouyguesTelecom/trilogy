/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import { extname, relative } from 'path';

// Should ignore dev.tsx, .spec.tsx, .test.tsx, tests/, .d.ts
const filesToIgnore = /(\.native\.|\.stories\.|\.spec\.|\.test\.|tests?\/|dev\.|\.d\.ts$)/;

const input = Object.fromEntries(
    glob
        .sync('./**/*.{ts,tsx}')
        .map(l => {
            console.log(l);
            return l;
        })
        .filter(file => !file.match(filesToIgnore))
        .map(file => [
            // The name of the entry point
            // src/nested/foo.ts becomes nested/foo
            relative('.', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
        ])
);

export default defineConfig(({ command }) => {
    const commonConfig = {
        plugins: [react(), dts(), libInjectCss()],
        build: {
            sourcemap: true,
            outDir: 'lib',
        }
    };
    if (command === 'serve') {
        const serveConfig = {
            build: {
                copyPublicDir: false,
            },
        };
        return mergeConfig(commonConfig, serveConfig);
    } else {
        // command === 'build'
        const buildConfig = {
            build: {
                copyPublicDir: false,
                rollupOptions: {
                    external: ['react', 'react-dom', 'react/jsx-runtime', 'react-native', '@ptomasroos/react-native-multi-slider'],
                    input,
                    output: {
                        assetFileNames: 'assets/[name][extname]',
                        entryFileNames: '[name].js',
                        inlineDynamicImports: false,
                    },
                },
                lib: {
                    entry: './index.ts',
                    name: 'ReactImageMagnfier',
                    formats: ['es'],
                    fileName: 'index',
                },
            },
        };
        return mergeConfig(commonConfig, buildConfig);
    }
});
