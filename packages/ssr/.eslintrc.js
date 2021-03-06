module.exports = {
  env: {
    browser: true,
    es2020: true,
    // jest: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest-playwright/recommended',
    'airbnb',
    // 'jest-dom',
    // 'plugin:testing-library/react',
    // 'plugin:testing-library/recommended',
    'plugin:jest-dom/recommended',
  ],
  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jest',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 0,
    'consistent-return': 0,
    'no-unused-vars': 1,
  },
  globals: {
    fabric: true,
  },
};
