module.exports = {
  extends: ['@trampoline', 'plugin:react/recommended'],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-no-bind': 'error',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/button-has-type': 'error'
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Hyperlink href={url} />
      // Specify in your own ESLint configuration
      // Example Usage: 'Hyperlink',
    ],
  },
}
