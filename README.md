# nextjs-sharing-code-monorepo

Demo application showing how to share code between NextJS TypeScript projects within a monorepo.

## How it works

* [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to create a 'monorepo' containing two NextJS applications
* [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to allow importing of code from one application into another

## Getting started
1. Install dependencies with `yarn`
2. Start both applications with `yarn dev:all`
3. View the applications running at `localhost:3001` and `localhost:3002`

The code sharing can be seen in the API routes:
* View `app-1` at `localhost:3001/api/hello` and see code that has been imported from `app-2`
* View `app-2` at `localhost:3002/api/hello` and see code that has been imported from `app-1`

And also seen in the client-side:
* TODO
* TODO