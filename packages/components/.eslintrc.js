module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true

  },
  extends: [
    'airbnb',
    'jest-dom',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:testing-library/recommended',
    'plugin:jest-dom/recommended'
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
    'testing-library',
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
