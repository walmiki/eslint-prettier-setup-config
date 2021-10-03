## Forked from [mryechkin](https://github.com/mryechkin/eslint-config-acme)
# ESLint + Prettier Config for React (Next.js)

`eslint-config-react-prettier-eslint`

> Shareable config for [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), aimed primarily to be used in [Next.js](https://nextjs.org) React projects.


## Overview

This configuration extends [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) ESLint config, with [airbnb/hooks](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnbhooks) enabled, and Prettier integration via the ESLint [plugin](https://github.com/prettier/eslint-plugin-prettier). Additionally, a few default rules are overriden to provide a more relaxed development experience in Next.js applications out of the box.

The goal of this configuration is to get code linting and formatting up and running as quickly as possible in a modern development environment, without sacrificing cleanliness and readability, and having to configure ESLint + Prettier from scratch every time.

## Installation

To install the package, run:

```shell
$ npm install -D eslint-config-react-prettier-eslint
```

This will install the shared config, as well as its peer dependencies:

- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- prettier

**NOTE:** if you are on an older version of `npm` (`<7.0.0`), you will need to install these manually:

```shell
$ npx install-peerdeps -D eslint-config-react-prettier-eslint
```

## Usage

To start using this shared config, add `eslint-config-react-prettier-eslint` (or just `acme`) to either your `package.json`:

```jsx
// package.json
{
  "eslintConfig": {
    "extends": ["acme"]
  }
}
```

or the `.eslintrc` file:

```jsx
// .eslintrc
{
  "extends": ["acme"]
}
```

## Prettier

This config supports Prettier integration out of the box. Rules that may conflict with ESLint are disabled via recommended configuration in [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

If you wish to override any [Prettier options](https://prettier.io/docs/en/options.html), you can do so by specifying them under `prettier/prettier` rule in your ESLint config file. For example:

```jsx
// .eslintrc
{
  "extends": "@acme",
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 110
      }
    ]
  }
}
```

Make sure that these rules match the options specified in your `.prettierrc` file.

## Adding Scripts

Add the following to your `package.json` file to define a script that will lint all known files and output the results:

```jsx
"scripts": {
  // ..
  "lint": "eslint --ignore-path .gitignore ."
  // ..
}
```

To fix all automatically-fixable issues, you can add the following script to your `package.json` as well (in addition to above):

```jsx
"scripts": {
  // ..
  "lint:fix": "eslint --ignore-path .gitignore --fix ."
  // ..
}
```

Note that you can update the above scripts as you see fit, this is just an example. See ESLint [CLI reference](https://eslint.org/docs/user-guide/command-line-interface) for more details.

## License

Licensed under MIT License.