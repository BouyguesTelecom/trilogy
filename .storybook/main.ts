import type { StorybookConfig } from '@storybook/react-webpack5'

import { dirname, join } from 'path'
import path = require('path')

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../packages/react/components/**/*.mdx', '../packages/react/components/**/*.stories.@(ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-storysource'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  webpackFinal: async (config) => {
    //config.output.publicPath = '/storybook'
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../packages/react'),
    }
    return config
  },
}
export default config
