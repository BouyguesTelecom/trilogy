export default {
  rootDir: '..',
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: ['/(components|context)/.*\\/test\\/.*native.*\\.test\\.(jsx?|tsx?)$'],
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native|react-native-toast-message)/)'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest-setup.native.ts'],
}
