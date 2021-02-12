module.exports = {
  "preset": "ts-jest",
  "verbose": true,
  "roots": [
    "./src"
  ],
  // "testPathIgnorePatterns": [
  //   "./src/env.ts/",
  //   "./dist"
  // ],
  "coverageThreshold": {
    "./src/**/*": {
      "branches": 50,
      "functions": 40
      // "statements": 1,
      // "lines": 1
    }
  },
  "collectCoverageFrom": [
    "./src/**/*.ts"
  ],
  "coverageDirectory": "./coverage",
  // "collectCoverage": true,
  // "testURL": "http://localhost:8055",
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  //setupFilesAfterEnv: ['./jest.setup.js'],
  // "globalSetup": './jest.setup.js',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: [
    "**/__tests__/**/*.+(ts|js)"
  ],
};

/*
module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
};*/
