module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  plugins: [
      'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'ug-fsd-plugin',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-misused-promises': 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/display-name": 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'ug-fsd-plugin/path-checker': 2,
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to', 'target', 'justify', 'align', 'direction', 'gap', 'as', 'enter',
        'enterFrom',
        'enterTo',
        'leave',
        'leaveFrom',
        'leaveTo',
          'gap',
          'direction',
      ]
    }]
  },
  globals: {
    __IS_DEV__: "readonly",
    __API__: true,
    __PROJECT__: true
  },
  overrides: [{
    files: ['**/src/**/*.{test, stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }]
};

