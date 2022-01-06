module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    polyfills: [
      // Example of marking entire API and all methods and properties as polyfilled
      'Promise',
      // Example of API with no property (i.e. a function)
      'fetch',
    ],
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:compat/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    'sort-destructure-keys',
    'simple-import-sort',
    'sort-export-all',
    'typescript-sort-keys',
    'unused-imports',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'compat/compat': 'off',
    'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: true }],
    'no-console': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/prop-types': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|@twr)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'sort-export-all/sort-export-all': 'off',
  },
  overrides: [
    {
      files: ['packages/**/index.{ts,tsx,js,jsx}'],
      rules: {
        'sort-export-all/sort-export-all': 'error',
      },
    },
  ],
  ignorePatterns: [
    'packages/**/*.spec.{ts,tsx,js,jsx}',
    'packages/theme/src/vendor/*.js',
  ],
};
