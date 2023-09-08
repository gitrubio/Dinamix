// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'no-warning-comments': "error",
    'react-refresh/only-export-components': 'warn',
    'semi' : "off",
    'no-console' : "warn", 
    "no-undef": "error",
    "react-hooks/rules-of-hooks": "off",
    "no-unused-expressions": "warn",
  },
}
