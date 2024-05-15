/** @type {import('jest').Config} */
const config = {
    preset: 'ts-jest',
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      "^.+\\.(tsx|ts)$": "ts-jest" ,
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
      '^.+\\.svg$': 'jest-svg-transformer',
      '^.+\\.css$': 'identity-obj-proxy',
      '^@components/(.*)$': '<rootDir>/src/components/$1', 
      '^@network/(.*)$': '<rootDir>/src/network/$1',
      '^@stores/(.*)$': '<rootDir>/src/stores/$1',
      '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    },
  };
  
  export default config;