import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react'
import { dirname, join,   } from 'path'

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../react/components/**/*.stories.@(ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
//    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-docs'),
//    getAbsolutePath('@storybook/addon-storysource'),
//    getAbsolutePath('storybook-addon-code-editor'),
//    getAbsolutePath('storybook-addon-react-view'),
//    getAbsolutePath('storybook-addon-playground'),
//    getAbsolutePath('@whitespace/storybook-addon-html'),
//    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../assets/assets'],
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins || []), react()];

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
  docs: {
    autodocs: true,
  }
}

export default config
