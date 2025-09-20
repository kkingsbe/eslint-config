// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import sonarjs from 'eslint-plugin-sonarjs'
import jsdoc from 'eslint-plugin-jsdoc';

export default [
    jsdoc.configs['flat/recommended-typescript'],
    {
        rules: {
            'jsdoc/require-jsdoc': ['error', {
                contexts: [
                    'FunctionDeclaration',
                    'FunctionExpression',
                    'ArrowFunctionExpression',
                    'MethodDefinition',
                    'ClassDeclaration',        // Classes
                    'TSInterfaceDeclaration',  // TypeScript interfaces
                    'TSTypeAliasDeclaration',  // TypeScript type aliases
                    'TSMethodSignature',       // TypeScript method signatures
                    'TSFunctionType',          // TypeScript function types
                    'TSEnumDeclaration'        // TypeScript enums
                ],
                publicOnly: true
            }]
        }
    },
    sonarjs.configs.recommended,
    {
        ignores: ['eslint.config.mjs'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    eslintPluginPrettierRecommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            sourceType: 'commonjs',
            parserOptions: {
                projectService: true,
            },
        }
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            "max-lines-per-function": [
                "error",
                {
                    "max": 70,
                    "skipBlankLines": true,
                    "skipComments": true
                }
            ],
            "max-depth": [
                "error",
                3
            ],
            "max-lines": [
                "error",
                300
            ]
        },
    },
]