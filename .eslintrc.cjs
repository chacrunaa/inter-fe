/*
  https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
*/

/** Для запрета приватных путей */
const DENIED_PATH_GROUPS = [
  // Private imports are prohibited, use public imports instead
  'app/*/**', 'pages/*/**', 'constants/*/**', 'network/*/**', 'stores/*/**', 'assets/*/*/**', 'utils/*/*/**',
  // Prefer absolute imports instead of relatives (for root modules)
  '../**/app', '../**/pages', '../**/constants', '../**/network', '../**/stores', '../**/assets', '../**/utils'];
  module.exports = {
    env: {
      browser: true,
      es2021: true,
       node: 'current', 
      'jest/globals': true
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error']}] ,
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-ignore': 'allow-with-description'  // Требует описание для @ts-ignore
      }],
      "import/no-anonymous-default-export": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      'prettier/prettier': 'warn',
      'no-restricted-imports': [2, {
        patterns: DENIED_PATH_GROUPS
      }],
      "react/react-in-jsx-scope": "off" ,
      "@typescript-eslint/no-explicit-any": "off",
    "import/export": "off",
    "import/named": "off",
    "@typescript-eslint/no-var-requires": "off",
    "prefer-const": "off"
    },
    settings: {
      'import/resolver': {
        typescript: {}
      },
      react: {
        version: 'detect'
      }
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:import/recommended', 'prettier'],
    overrides: [
      {
        "files": [
          "**/*.stories.*"
        ],
      }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      ecmaFeatures: {
        jsx: true,
        tsx: true,
        modules: true
      },
      project: ['./tsconfig.json'],
      sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', "simple-import-sort", "jest"],
  };
  