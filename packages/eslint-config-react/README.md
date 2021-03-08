# React ESLint Configuration

This ESLint Configuration serves as a base for a React Project.

## Installation

First, install the dependencies:

```shell
yarn add -D @trampoline/eslint-config-react eslint eslint-plugin-import eslint-plugin-react typescript
```

Second, create a `.eslintrc.js` file containing the ESLint configuration and reference the config in it:

```js
module.exports = {
  extends: ['@trampoline/react'],
}
```
