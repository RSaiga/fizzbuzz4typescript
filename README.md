## Fizzbuzz Typescript

### Setup
#### yarn install
yarn init
#### typescript install
yarn add -D typescript @types/node
#### tsconfig.json
./node_modules/typescript/bin/tsc --init
#### tsconfig.json mod
```
  "include": [
    "**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "**/*.test.ts"
  ]
```
#### jest install
yarn add -D jest ts-jest @types/jest
#### jest.config.js init
yarn ts-jest config:init
#### swc compiler
yarn add -D @swc/jest
yarn add -D @swc/core
#### jest.config.js set
```
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  }
```
#### linter
yarn add -D tslint