# Unity Catalog Documentation

This repository contains the Unity Catalog documentation source code.

## Getting started

Install dependencies with [pnpm](https://pnpm.io/) and start the [Astro](https://astro.build) site in development mode:

```
pnpm install
pnpm dev
```

This will start a local webserver which will automatically watch for any changes.

### Building for production

You can run `build` then run `preview` to build and serve a production build of the site locally:

```sh
pnpm build
pnpm preview
```

This will start a local webserver using the source code built for production.

## Upgrading dependencies

It's a best practice to make sure that our dependencies are always up to date. You can run `scripts/upgrade-dependencies` to automatically install upgrades.

Do note that you will still need to verify that things work as expected.
