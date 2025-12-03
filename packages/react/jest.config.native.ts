export default {
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: ['/components/.*/test/.*native'],
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native|react-native-toast-message)/)'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.native.ts'],
  testPathIgnorePatterns: ['<rootDir>/lib/'],
}
