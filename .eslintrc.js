module.exports = {
    root: true,
    env: {
      es2020: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      project: ['./tsconfig.eslint.json']
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier',
    ],
    rules: {
    },
  };