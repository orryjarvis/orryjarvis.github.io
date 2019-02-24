module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
