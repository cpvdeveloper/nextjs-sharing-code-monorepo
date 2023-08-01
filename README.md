# nextjs-sharing-code-monorepo

Demo application showing how to share code between NextJS TypeScript projects within a monorepo. Full explanation of how it's built [here](https://medium.com/weekly-webtips/sharing-code-between-nextjs-applications-2c0f3b415e1).

## How it works

- [pnpm workspaces](https://pnpm.io/workspaces) to create a 'monorepo' containing two NextJS applications and a shared package
- ~~[next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to allow importing of code from one application into another~~. Simplified as of Next.js version 13, where there is a built-in [`transpilePackages` option](https://beta.nextjs.org/docs/api-reference/next.config.js#transpilepackages) which can be used instead of the 3rd party `next-transpile-modules` package.

## Getting started

1. Install dependencies with `pnpm i`
2. Start both applications with `pnpm dev:all`
3. View the applications running at `localhost:3001` and `localhost:3002`

The code sharing is demonstrated for both frontend and backend (API) code:

- The `app-1` homepage defined in `app-1/pages/index.js` uses the `openApp2` component from `app-2`; this can be seen working at `localhost:3001`
- The `app-1` 'hello' API route in `app-1/pages/api/hello.tx` uses the `sayHello` function from `app-2`; this can be seen working at `localhost:3001/api/hello`
