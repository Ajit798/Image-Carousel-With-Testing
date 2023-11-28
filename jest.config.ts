// eslint-disable-next-line import/no-anonymous-default-export
export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      "^.+\\.(tsx|ts)$": "ts-jest"
    },
    setupFilesAfterEnv: ['<rootDir>/src/setUpTests.ts'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  };