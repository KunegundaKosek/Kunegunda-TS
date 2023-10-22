// jest.config.ts
export default {
      preset: 'ts-jest',
      testEnvironment: 'jest-environment-jsdom',
      moduleFileExtensions: ['ts', 'js', 'json'],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
      testMatch: ['**/__test__/**/*.test.[tj]s'],
    };
    