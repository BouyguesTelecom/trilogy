export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "roots": ["<rootDir>"],
  moduleNameMapper: {
    '@services': '<rootDir>/services',
    '@helpers': '<rootDir>/helpers',
    '@context': '<rootDir>/context',
    '@objects': '<rootDir>/objects',
    '@styles': '<rootDir>/../styles',
  },
//  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' } ),
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  snapshotResolver: './snapshotResolver.ts',
  testRegex: ['/(components|context)/.*\\/test\\/(?!.*(?:native|snap)).*\\.test\\.(jsx?|tsx?)$'],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'css'],
  modulePathIgnorePatterns: [
    "components/hooks"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/hooks",
    "<rootDir>/objects/Typography",
    "<rootDir>/objects/atoms",
    "<rootDir>/objects/facets",
    "<rootDir>/services",
    "<rootDir>/components/select",
  ],
}
