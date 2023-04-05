module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'unused-imports',
        'ug-fsd-plugin',
        'import',
    ],
    rules: {
        'react/jsx-max-props-per-line': [2, { maximum: 4 }],
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-react': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-misused-promises': 1,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/display-name': 0,
        'no-unused-vars': 0,
        'no-undef': 0,
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'ug-fsd-plugin/path-checker': ['error', { alias: '@' }],
        'ug-fsd-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'ug-fsd-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'border',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                    'as',
                    'enter',
                    'enterFrom',
                    'enterTo',
                    'leave',
                    'leaveFrom',
                    'leaveTo',
                    'gap',
                    'direction',
                ],
            },
        ],
    },
    globals: {
        __IS_DEV__: 'readonly',
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test, stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
