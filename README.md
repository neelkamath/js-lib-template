# JavaScript Library Template

This repo is a template for a JavaScript library. You can browse through the repo to see which technologies are used, and how they're used. This template uses the Yarn package manager, but you probably want to replace it with npm since npm is better.

- Platforms: Node.js, Browsers supporting ES6 or higher, React Native
- Module systems: ECMAScript Modules
- Programming languages: ES6 (JavaScript, TypeScript, etc. which target ES6 or higher)
- Static types: TypeScript definitions bundled

## Installation

```shell
yarn add @neelkamath/js-lib-template
```

## Usage

- Here's the latest version's [documentation](https://neelkamath.github.io/js-lib-template/). To view a previous version's documentation, find the relevant [release](https://github.com/neelkamath/js-lib-template/releases), download **docs.zip** from **Assets**, unzip it, and open `docs/index.html` in your browser.
- [Changelog](CHANGELOG.md)
- Never import APIs from nested files.

  For example, this is correct:

  ```typescript
  import { sayHello } from '@neelkamath/js-lib-template/dist/browser/src';
  ```

  For example, this is incorrect:

  ```typescript
  import sayHello from '@neelkamath/js-lib-template/dist/browser/src/hello';
  ```

- On the browser, import APIs from `@neelkamath/js-lib-template/dist/browser/src`.
- On Node.js, import APIs from `@neelkamath/js-lib-template/dist/node/src`.
- On React Native, I'm not sure whether to import APIs from `@neelkamath/js-lib-template/dist/browser/src` or `@neelkamath/js-lib-template/dist/node/src`. Please send a PR to update this doc if you find out.

## [Contributing](CONTRIBUTING.md)
