<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/json-pascal-case/main/.github/images/favicon512x512-json-pascal-case.png" align="center" alt=":package: json-pascal-case" />
 <h2 align="center">:package: json-pascal-case</h2>
 <p align="center">A simple JSON parser that converts keys to pascal case</p>
  <p align="center">
    <a href="https://github.com/hebertcisco/json-pascal-case/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/json-pascal-case?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/json-pascal-case/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/json-pascal-case?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/json-pascal-case">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/json-pascal-case?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/json-pascal-case">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/json-pascal-case?color=336791&label=Total%20downloads" />
    </a>
 <a href="https://github.com/hebertcisco/json-pascal-case">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/json-pascal-case.svg?style=flat&color=336791" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/json-pascal-case/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/json-pascal-case/issues/new/choose">Request Feature</a>
  </p>
 <h3 align="center">Systems on which it has been tested:</h3>
 <p align="center">
   <a href="https://www.apple.com/br/macos/">
      <img alt="Macos" src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white&style=flat" />
    </a>
    <a href="https://ubuntu.com/download">
      <img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white&style=flat" />
    </a>
    <a href="https://www.microsoft.com/pt-br/windows/">
      <img alt="Windows" src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white&style=flat" />
    </a>
  </p>
<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>A simple JSON parser that converts keys to pascal case</strong>✨</p>

# Getting started

## Installation

> Install with yarn or npm: `yarn` or `npm`:

```bash
# yarn
yarn add json-pascal-case
```

```bash
# npm
npm i json-pascal-case --save
```

### Import the lib with es6 or cjs

```mjs
// es6
import jsonPascalCase from 'json-pascal-case';
```

```cjs
// cjs
const jsonPascalCase = require('json-pascal-case');
```

### Usage examples

#### transformArrayOfObjects

```ts
#!/usr/bin/env node
import jsonPascalCase from 'json-pascal-case';

const array_of_objects = [
    {
        test: 'test',
        test2: 'test2',
    },
    {
        test: 'test',
        test2: 'test2',
    },
];

const result = jsonPascalCase.transformArrayOfObjects(array_of_objects);

console.log(result);
```

#### transformObject

```ts
#!/usr/bin/env node
import jsonPascalCase from 'json-pascal-case';

const my_object = {
    test: 'test',
    test2: 'test2',
};

const result = jsonPascalCase.transformObject(my_object);

console.log(result);
```

#### transformString

```ts
#!/usr/bin/env node
import jsonPascalCase from 'json-pascal-case';

const my_string = "my text in lower case";

const result = jsonPascalCase.transformString(my_string);

console.log(result);
```

#### transformArrayOfStrings

```ts
#!/usr/bin/env node
import jsonPascalCase from 'json-pascal-case';

const my_strings = ["text1", "text2"];

const result = jsonPascalCase.transformArrayOfStrings(my_strings);

console.log(result);
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
