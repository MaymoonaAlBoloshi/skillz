import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-config-prettier'
import reactRefresh from 'eslint-plugin-react-refresh'

const compat = new FlatCompat({
    baseDirectory: import.meta.url,
    resolvePluginsRelativeTo: import.meta.url
})

export default [
    js.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser
        },
        env: { browser: true, es2020: true },
        ignores: ['dist', '.eslintrc.cjs'],
        plugins: {
            '@typescript-eslint': typescript,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ]
        }
    },
    ...compat.extends('eslint:recommended'),
    ...compat.extends('plugin:@typescript-eslint/recommended'),
    ...compat.extends('plugin:react-hooks/recommended'),
    ...compat.extends('prettier')
]
