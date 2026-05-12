import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../../react/components/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (viteConfig) => {
    viteConfig.resolve = viteConfig.resolve ?? {}
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias as Record<string, string>),
      '@trilogy-ds/react': path.resolve(__dirname, '../../react'),
      '@': path.resolve(__dirname, '../../react'),
    }
    return viteConfig
  },
}

export default config
