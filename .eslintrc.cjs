module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'import', 'jest', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: ['packages/react/tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks':'off',
    'no-case-declarations':'off',
    'react/jsx-no-useless-fragment': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'fc.assert'],
      },
    ],
    'arrow-spacing': 2,
    'block-spacing': 1,
    'brace-style': 1,
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'comma-spacing': 1,
    'comma-style': 1,
    'default-case': 'error',
    'dot-location': ['warn', 'property'],
    'eol-last': 2,
    'func-call-spacing': 2,
    'import/export': 0,
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': 1,
    'keyword-spacing': 1,
    'lines-between-class-members': 1,
    'max-len': [
      'error',
      {
        code: 6000,
      },
    ],
    'no-alert': 0,
    'no-confusing-arrow': 1,
    'no-console': 0,
    'no-duplicate-imports': 1,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
      },
    ],
    'no-trailing-spaces': 1,
    'no-unneeded-ternary': 1,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'react-hooks/exhaustive-deps': 'off',
    'no-useless-constructor': 1,
    'no-var': 1,
    '@typescript-eslint/no-var-requires': 0,
    'object-curly-spacing': [1, 'always'],
    'prefer-const': 1,
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
    ],
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    indent: 'off',
    quotes: 'off',
    'quote-props': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-no-target-blank': 2,
    'react/prop-types': 0,
    'rest-spread-spacing': 2,
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'always',
      },
    ],
    'spaced-comment': ['warn', 'always'],
    'switch-colon-spacing': 1,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@', './packages/react']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    'import/ignore': ['react-native'],
  },
}
