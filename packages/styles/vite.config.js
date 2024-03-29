import { defineConfig } from "vite";
import path from "path";
import glob from "glob";
import {generateIconsScss} from "./config/plugins/vite-plugin-generate-icons-scss";
import {cssPlugin} from "./config/plugins/vite-plugin-mangler";
import copy from "rollup-plugin-copy";
export default defineConfig({
  plugins: [
    generateIconsScss({
      iconsDir: path.resolve(__dirname, './assets/icons/all'),
      scssOutputPath: path.resolve(__dirname, './assets/icons/_all.scss'),
      prefix: '',
      sizeAuto: false,
      directory: 'all'
    }),
    cssPlugin()
  ],
  css: {
    modules: false,
    postcss: {},
    preprocessorOptions: {
      scss: {
        additionalData: `@use './framework/src/all' as *;`,
        sassOptions: {
          includePaths: ['./themes'],
        },
      },
    },
  },
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "./themes/*", "*.scss")),
      output: {
        assetFileNames: `default/[name].[ext]`
      }
    },
  }
})
