import { defineConfig } from "vite";
import path from "path";
import glob from "glob";
import {generateIconsScss} from "./config/plugins/vite-plugin-generate-icons-scss";
import {cssPlugin} from "./config/plugins/vite-plugin-mangler";

const isWatchMode = process.argv.includes('--watch');

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
        silenceDeprecations: ['import', 'legacy-js-api', 'mixed-decls', 'global-builtin' ],
        additionalData: '',
        sassOptions: {
          includePaths: ['./themes'],
        },
      },
    },
  },
  build: {
    watch: isWatchMode ? {} : null,
    emptyOutDir: false,
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "./themes/*", "*.scss")),
      output: {
        assetFileNames: `default/[name].[ext]`
      }
    },
  }
})
