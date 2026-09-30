const expoConfig = require('eslint-config-expo/flat')

const reactFiles = ['packages/react/**/*.{js,jsx,ts,tsx}']

module.exports = [
  {
    ignores: [
      '**/node_modules/**',
      '**/lib/**',
      '**/coverage/**',
      '**/build/**',
      '**/public/**',
      'packages/react/components/progress/radial/react-native-circular-progress/**',
      'packages/react/components/slider/utils/**',
      'examples/**',
      'config/**',
      'styles/**',
      '**/test/**',
      '**/*.stories.tsx',
      '**/*jest*',
      '**/*snapshotResolver.ts',
    ],
  },
  ...expoConfig.map((config) => ({
    ...config,
    files: reactFiles,
  })),
  {
    files: reactFiles,
    settings: {
      react: {
        version: '18.2',
      },
      'import/resolver': {
        typescript: {
          project: './packages/react/tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'import/export': 'off',
      'import/no-named-as-default': 'off',
    },
  },
]
