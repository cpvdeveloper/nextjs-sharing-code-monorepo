# nextjs-sharing-code-monorepo

Demo application showing how to share code between NextJS TypeScript projects within a monorepo.

## How it works

- [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to create a 'monorepo' containing two NextJS applications
- [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to allow importing of code from one application into another

## Getting started

1. Install dependencies with `yarn`
2. Start both applications with `yarn dev:all`
3. View the applications running at `localhost:3001` and `localhost:3002`

The code sharing is demonstrated for both frontend and backend (API) code:

- The `app-1` homepage defined in `app-1/pages/index.js` uses the `openApp2` component from `app-2`; this can be seen working at `localhost:3001`
- The `app-1` 'hello' API route in `app-1/pages/api/hello.tx` uses the `sayHello` function from `app-2`; this can be seen working at `localhost:3001/api/hello`

## A note on Nextjs with next-transpile-modules

There is a strict dependency between the versions of next-transpile-modules and Nextjs itself, check the [compatibility table](https://github.com/martpie/next-transpile-modules#compatibility-table) to ensure that the versions work together. This repo currently uses Nextjs v11 with next-transpile-modules v8.
