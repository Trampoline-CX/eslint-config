require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  plugins: ['jsx-a11y'],
  extends: ['@trampoline', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'react/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/button-has-type': 'error',
    'react/jsx-pascal-case': ['error', { allowNamespace: true }],
    'react/jsx-no-useless-fragment': 'error',
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
