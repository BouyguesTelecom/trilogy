export default {
  rootDir: '..',
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
    '^@trilogy-ds/locales/lib/(.*)$': '<rootDir>/../locales/en/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/jest-setup.ts'],
  snapshotResolver: '<rootDir>/jest/snapshotResolver.ts',
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
