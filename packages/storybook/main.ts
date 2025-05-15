import type { StorybookConfig } from '@storybook/react-vite'

import { dirname, join, resolve } from 'path'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../react/components'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
//    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-storysource'),
    getAbsolutePath('storybook-addon-code-editor'),
    getAbsolutePath('storybook-addon-react-view'),
    getAbsolutePath('storybook-addon-playground'),
    getAbsolutePath('@whitespace/storybook-addon-html'),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../assets/assets'],
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins || []), react(), mdx()];

    config.resolve = config.resolve || { alias: {} };
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': join(__dirname, '../react'),
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      '@whitespace/storybook-addon-html/preview': require.resolve('@whitespace/storybook-addon-html/preview')
    };

    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['react', 'react-dom', 'react/jsx-runtime'],
    };

    console.log('Updated Vite Configuration:', config);

    return config;
  },
}
export default config
