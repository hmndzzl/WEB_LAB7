import neostandard from 'neostandard'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  ...neostandard({
    ts: true,
  }),
  {
    ignores: ['dist', 'node_modules', 'storybook-static']
  },
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      }
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-handler-names': 'off',
      semi: ['error', 'never'],
      'max-len': ['error', { code: 120 }]
    }
  }
]
