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
      es2021: true
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
        "rules": {
          "import/no-anonymous-default-export": "off",
          "simple-import-sort/imports": "error",
          "simple-import-sort/exports": "error"
        }
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
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', "simple-import-sort"],
    rules: {
      'prettier/prettier': 'warn',
      'no-restricted-imports': [2, {
        patterns: DENIED_PATH_GROUPS
      }],
      'import/no-named-as-default-member': 'warn',
      'no-extra-boolean-cast': 'off',
      // assertion like !!variable
      'quotes': ['warn', 'single', {
        allowTemplateLiterals: true,
        avoidEscape: true
      }],
      'global-require': 1,
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: ['**/*.test.ts?(x)', '**/*.spec.ts?(x)', '**/test-utils.ts', 'vite.config.js'],
        optionalDependencies: false,
        peerDependencies: false
      }],
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'no-extra-semi': 'error',
      // только одна точка с запятой
      '@typescript-eslint/no-extra-semi': ['error'],
      'curly': 'error',
      // всегда оборачиваем в фигурные скобки
      'eqeqeq': 'error',
      // только строгое сравнение
      'no-tabs': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multiple-empty-lines': [
      // Допустимое количество пустых строк = 1, и только 1 в конце файла.
      'error', {
        max: 1,
        maxEOF: 1
      }],
      'linebreak-style': ['error', 'unix'],
      'object-property-newline': ['warn', {
        allowAllPropertiesOnSameLine: true
      }],
      /* одинаковый формат имён у свойств объекта */
      'quote-props': ['error', 'consistent-as-needed'],
      'comma-dangle': ['error', {
        arrays: 'ignore',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore'
      }],
      'eol-last': 'error',
      'operator-linebreak': ['error', 'after', {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }],
      'arrow-parens': ['error', 'as-needed'],
      /* Чтобы не забывать подчищать за собой после отладки лишние логи*/
      'no-console': ['error', {
        allow: ['info', 'warn', 'error']
      }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }],
      'no-unused-expressions': 'off',
      "import/named": 'warn',
      '@typescript-eslint/no-unused-expressions': ['error'],
      'no-magic-numbers': 'off',
      // Note: base rule must be disabled here as it can report incorrect errors in @typescript-eslint/no-magic-numbers below
      // '@typescript-eslint/no-magic-numbers': ['warn', {
      //   ignoreNumericLiteralTypes: true,
      //   ignoreTypeIndexes: true,
      // }],
      'no-eval': 'error',
      'no-continue': 'error',
      /* https://eslint.org/docs/latest/rules/prefer-const было off */
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }],
      'no-extra-parens': 'off',
      // Note: base rule must be disabled here as it can report incorrect errors in @typescript-eslint/no-extra-parens below
      '@typescript-eslint/no-extra-parens': ['off'],
      // можно оборачивать в ()
      /* Скажем НЕТ мутации!!! было off */
      'no-param-reassign': ['error', {
        props: false
      }],
      'no-debugger': 'error',
      // Скажем НЕТ дебагу на боевой версии!
      /* variable += 1, лучше чем variable++ */
      'no-plusplus': ['error', {
        allowForLoopAfterthoughts: true
      }],
      'no-nested-ternary': 'off',
      /* function rules -> */
      'space-before-function-paren': 'off',
      '@typescript-eslint/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }],
      'func-call-spacing': 'off',
      // Note: you must disable the base rule as it can report incorrect errors
      '@typescript-eslint/func-call-spacing': ['error'],
      // запрещает пробел между именем функции и вызовом
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'warn',
      // сначала функция должна быть о переделена, потом вызвана
      '@typescript-eslint/explicit-function-return-type': 'off',
      // обязательное указание возвращаемого типа
      '@typescript-eslint/no-empty-function': ['error'],
      // функции с пустым телом запрещены для них 1 noop c ручным исключением из текущего правила
      /* <-function rules */
      // '@typescript-eslint/consistent-generic-constructors': 'warn',
      '@typescript-eslint/array-type': ['error', {
        default: 'array'
      }],
      // Использовать obj[] вместо Array<obj>
      /* https://eslint.org/docs/latest/rules/require-await#when-not-to-use-it*/
      'require-await': 'off',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/return-await': 'error',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      // предпочитаемый формат описание definitions - type // TODO: error?
      '@typescript-eslint/no-dynamic-delete': ['error'],
      '@typescript-eslint/no-explicit-any': 'warn',
      // предупреждает об использовании any
      '@typescript-eslint/no-for-in-array': ['error'],
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-throw-literal': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      // не использовать requires для импорта
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/require-array-sort-compare': ['error'],
      'react/jsx-no-bind': ['off'],
      // 'react/jsx-no-bind': ['off', {
      //   ignoreDOMComponents: true,
      //   allowArrowFunctions: false
      // }],
      // TODO: error after refactoring.
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      // off for typescript
      'react/react-in-jsx-scope': 'off',
      // off for typescript
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unexpected-multiline': 'warn',
      'no-unreachable': 'warn',
      'no-continue': 'off',
    },
    "overrides": [
      {
        "files": ["**/*.js", "**/*.ts", "**/*.tsx"],
        "rules": {
          "simple-import-sort/imports": [
            "error",
            {
              "groups": [
                // `react` first, second packages then starting with a character, after side effect imports, after packages starting with `@`
                ["^react$", "^[a-z]", "^\\u0000", "^@?\\w"],
                // Internal imports
                ["^@", "^\\.\\.(?!/?$)", "^\\.\\./?$","^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                // Style imports
                ["^.+\\.s?css$"],
              ]
            }
          ]
        }
      }
    ]
  };
  