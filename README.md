# Trampoline ESLint Configurations

Because a programmer may be wrong sometimes, even after taking some coffee :coffee:

- [📋 ESLint Configurations List](#-eslint-configurations-list)

## 📋 ESLint Configurations List

- [Basic Configuration `@trampoline/eslint-config`](packages/eslint-config/README.md)
- [For React Projects `@trampoline/eslint-config-react`](packages/eslint-config-react/README.md)

# Publish a new version

We use `release-please` (see @https://github.com/googleapis/release-please) to perform the automatic version updates and release of the new version to NPM.

When pushing the latest codes containing releasable units (commits prefixed with `feat` and `fix`) to the `main` branch, a release PR is created. Once this release PR is merged, a new version, along with the corresponding changelog, will be published.

As `release-please` uses the Conventional Commit messages to generate release PRs, make sure to follow the Comventional Commits specification (see @https://www.conventionalcommits.org/en/v1.0.0/)
