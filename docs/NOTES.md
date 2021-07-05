# Tasks

## Project settings

1. Add ESLint + Prettier

### Installing ESLint

```sh
npm i -D eslint
npx eslint --init
```

Answers:

* **How would you like to use ESLint?** To check syntax, find problems, and enforce code style
* **What type of modules does your project use?** · commonjs
* **Which framework does your project use?** · none
* **Does your project use TypeScript?** · No
* **Where does your code run?** · browser
* **How would you like to define a style for your project?** · Use a popular style guide
* **Which style guide do you want to follow?** · standard
* **What format do you want your config file to be in?** · JSON

```
Checking peerDependencies of eslint-config-standard@latest
The config that you've selected requires the following dependencies:

eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 || ^5.0.0
✔ Would you like to install them now with npm? · Yes
```

Equivalent `npm install`:

```sh
npm i -D eslint eslint-plugin-import eslint-plugin-promise eslint-config-standard eslint-plugin-node
```

#### Forcing semicolons

We simply add a new rule to `.eslint.json`:

```json
"rules": {
  "semi": [2, "always"]
}
```


#### Running ESLint on the project source

```sh
npx eslint src
```

Adding script to `package.json`

```
"scripts": {
  ...
  "lint": "eslint src"
}
```

```sh
npm run lint
```


#### ESLint plugins

* [esling-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)


##### eslint-plugin-jest

```sh
npm i -D eslint-plugin-jest
```

Forcing semicolons and adding jest globals:

File: `.eslintrc.json`

```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": [
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": ["jest"],
    "rules": {
      "semi": [2, "always"]
    }
}
```

##### eslint-plugin-prettier & configuring ESLint + Prettier

```sh
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

On `.eslintrc`:

```json
"rules": {
  "prettier/prettier": "error",
  "arrow-body-style": "off",
  "prefer-arrow-callback": "off",
  "semi": [2, "always"]
}
```


## Changes in the code

1. "body-parser" is deprecated in Express 4.6+

Source: https://stackoverflow.com/questions/66525078/bodyparser-is-deprecated#answer-66538899

We can change:

```js
import { json, urlencoded } from "body-parser";
...
app.use(urlencoded({ extended: false }));
app.use(json());
```

por:

```js
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
```

And:

```sh
npm uninstall body-parser
```
