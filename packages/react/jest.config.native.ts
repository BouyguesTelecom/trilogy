export default {
  testEnvironment: 'node',
  transform: {
    '\\.svg$': '<rootDir>/fileTransformer.cjs',
    '\\.(tsx|ts)$': 'ts-jest',
  },
  testRegex: ['/components/.*/test/.*native'],
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
}
