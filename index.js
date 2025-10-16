// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import sonarjs from 'eslint-plugin-sonarjs'
import jsdoc from 'eslint-plugin-jsdoc';
import angular from 'angular-eslint';

const isAngularProject = (() => {
    try {
        require.resolve('@angular/core');
        return true;
    } catch {
        return false;
    }
})();

const angularConfigs = isAngularProject ? [
    {
        files: ['**/*.ts'],
        processor: angular.processInlineTemplates,
        rules: {
            "@angular-eslint/directive-selector": ["error", {
                type: "attribute",
                prefix: "app",
                style: "camelCase"
            }],
            "@angular-eslint/component-selector": ["error", {
                type: "element",
                style: "kebab-case"
            }]
        }
    },
    {
        files: ['**/*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            "@angular-eslint/template/click-events-have-key-events": 'off',
            "@angular-eslint/template/interactive-supports-focus": 'off',
            "@angular-eslint/template/prefer-control-flow": [
                "error"
            ],
            "@angular-eslint/template/prefer-self-closing-tags": [
                "warn"
            ],
            "@angular-eslint/template/attributes-order": [
                "error"
            ]
        },
    }
] : [];

const typescriptConfigs = [
    {
        files: ['**/*.ts', '**/.*.ts'],
    },
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
        rules: {
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                    printWidth: 80,
                    tabWidth: 2,
                    semi: true,
                    singleQuote: true,
                    trailingComma: 'es5',
                }
            ],
        },
    },
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

export default [
    ...typescriptConfigs,
    ...angularConfigs
]