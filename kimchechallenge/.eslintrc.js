module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: ["src/App.test.js",
    "src/serviceWorker.js",
    "src/index.js"],
  rules: {
    'func-names': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'no-return-assign': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
