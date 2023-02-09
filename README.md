# Trampoline ESLint Configurations

Because a programmer may be wrong sometimes, even after taking some coffee :coffee:

- [📋 ESLint Configurations List](#-eslint-configurations-list)

## 📋 ESLint Configurations List

- [Basic Configuration `@trampoline/eslint-config`](packages/eslint-config/README.md)
- [For React Projects `@trampoline/eslint-config-react`](packages/eslint-config-react/README.md)

# Publish a new version

```bash
# Production release
yarn update-versions <major|minor>
yarn release

# Beta release
yarn update-versions prerelease
yarn release --tag beta
```
