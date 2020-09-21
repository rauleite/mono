module.exports = {
  preset: 'jest-playwright-preset',
  // testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(e2e).[jt]s?(x)" ]
  testMatch: ['**/__e2e__/**/*.[jt]s?(x)', "**/?(*.)+(_spec).[jt]s?(x)"],
  testTimeout: 30000
};
