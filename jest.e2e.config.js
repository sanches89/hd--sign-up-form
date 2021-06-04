module.exports = {
  preset: 'jest-playwright-preset',
  setupFilesAfterEnv: ['expect-playwright'],
  testMatch: ['<rootDir>/e2e/*.ts?(x)'],
}
