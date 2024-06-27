export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>',
  },
  //  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' } ),
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  snapshotResolver: '<rootDir>/snapshotResolver.ts',
  testRegex: ['/(components|context)/.*\\/test\\/(?!.*(?:native|snap)).*\\.test\\.(jsx?|tsx?)$'],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'css'],
  coveragePathIgnorePatterns: [
    '<rootDir>/objects/Typography',
    '<rootDir>/objects/atoms',
    '<rootDir>/objects/facets',
    '<rootDir>/services',
    '<rootDir>/components/select',
  ],
}
