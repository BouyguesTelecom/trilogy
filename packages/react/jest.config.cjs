module.exports = {
  preset: "jest-expo",
  testMatch: ["<rootDir>/src/components/**/*.native.test.[jt]s?(x)"],
  moduleFileExtensions: [
    "native.tsx",
    "native.ts",
    "tsx",
    "ts",
    "native.js",
    "js",
    "json",
    "node",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@version$": "<rootDir>/version.json",
    "^@trilogy-react/theme$": "<rootDir>/src/constants/theme.ts",
  },
  collectCoverageFrom: ["src/components/**/*.native.tsx"],
  coverageDirectory: "<rootDir>/coverage/native",
  coverageReporters: ["text", "html"],
}
