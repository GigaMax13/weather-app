module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-filename-extension': 0,
    'lines-between-class-members': 0,
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'comma-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  },
  globals: {
    fetch: false
  }
};
