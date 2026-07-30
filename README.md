[![Contributors][contributors-shield]][contributors-url]
[![npm][npm-shield]](https://www.npmjs.com/package/@kontent-ai/eslint-config)
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

[![Discord][discord-shield]][discord-url]


# Kontent.ai eslint configuration

This is the eslint configuration that Kontent.ai uses for its TypeScript packages. This package uses ESLint 10+ Flat Config format and requires Node.js `^20.19.0 || ^22.13.0 || >=24.0.0`.

For React projects, JSX formatting and React-specific linting are covered by [`@kontent-ai/biome-config`](https://github.com/kontent-ai/biome-config) instead of this package.

# Getting Started

1. Install the package the eslint configuration.

    ```sh
    # optionaly install eslint if you don't already have it
    # pnpm add -D eslint
    pnpm add -D @kontent-ai/eslint-config
    ```

1. Extend the configuration in your `eslint.config.js` file (Flat Config format is required)

    ```js
    // eslint.config.js
    import kontentAiConfig from "@kontent-ai/eslint-config";
    import { defineConfig } from "eslint/config";

    export default defineConfig({
        extends: [ kontentAiConfig ],
    });
    ```

1. Run the lint process based on your project configuration

# License

Distributed under the MIT License. See [`LICENSE.md`](./LICENSE.md) for more information.


[contributors-shield]: https://img.shields.io/github/contributors/kontent-ai/eslint-config.svg?style=for-the-badge
[contributors-url]: https://github.com/kontent-ai/eslint-config/graphs/contributors
[npm-shield]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[forks-shield]: https://img.shields.io/github/forks/kontent-ai/eslint-config.svg?style=for-the-badge
[forks-url]: https://github.com/kontent-ai/eslint-config/network/members
[stars-shield]: https://img.shields.io/github/stars/kontent-ai/eslint-config.svg?style=for-the-badge
[stars-url]: https://github.com/kontent-ai/eslint-config/stargazers
[issues-shield]: https://img.shields.io/github/issues/kontent-ai/eslint-config.svg?style=for-the-badge
[issues-url]:https://github.com/kontent-ai/eslint-config/issues
[license-shield]: https://img.shields.io/github/license/kontent-ai/eslint-config.svg?style=for-the-badge
[license-url]:https://github.com/kontent-ai/eslint-config/blob/master/LICENSE.md
[discord-shield]: https://img.shields.io/discord/821885171984891914?color=%237289DA&label=Kontent.ai%20Discord&logo=discord&style=for-the-badge
[discord-url]: https://discord.com/invite/SKCxwPtevJ
