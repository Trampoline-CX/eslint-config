# Basic ESLint Configuration

This ESLint Configuration serves as a base for other configurations. It can be used by itself in small scripts.

## Installation

First, install the dependencies.

```bash
yarn add -D @trampoline/eslint-config eslint eslint-plugin-import typescript
```

Second, create a `.eslintrc.js` file containing the ESLint configuration and reference the config in it:

```js
module.exports = {
  extends: ['@trampoline'],
}
```
