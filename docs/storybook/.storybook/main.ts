import ts from 'typescript';
import ReactDocgenTypescriptPlugin from 'react-docgen-typescript-plugin';
import * as path from 'path'

export {};

module.exports = {
  reactDocgen: 'react-docgen-typescript',
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
    },
    '@storybook/addon-storysource',
    '@storybook/theming',
    '@storybook/addon-a11y',
  ],
  babel: async (options: any) => ({
    ...options,
    presets: [
      ...options.presets,
    ],
    plugins: [
      ...options.plugins,
      "@babel/plugin-transform-runtime"
    ],
    sourceType: "module"
  }),
  framework: '@storybook/react',
  stories: [path.resolve(__dirname, '../../../packages/react/components/**/**.stories.tsx')],
  staticDirs: ["../../../react/components"],
  exclude: ['../../../styles'],
  plugins: [
    new ReactDocgenTypescriptPlugin({
      tsconfigPath: 'tsconfig.json',
      compilerOptions: { jsx: ts.JsxEmit.Preserve },
    }),
  ],
}
