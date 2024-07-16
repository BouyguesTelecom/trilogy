export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  snapshotResolver: '<rootDir>/snapshotResolver.ts',
  testRegex: ['/(components|context)/.*\\/test\\/(?!.*(?:native|snap)).*\\.test\\.(jsx?|tsx?)$'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'css'],
  testPathIgnorePatterns: ['<rootDir>/lib'],
}
