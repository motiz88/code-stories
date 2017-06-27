# React Starter

Create React apps with zero initial configuration. `react-starter` is built using [Neutrino](https://github.com/mozilla-neutrino/neutrino-dev) to harness the power of Webpack with the simplicity of [presets](https://neutrino.js.org/presets/). 
 
## Features

- Zero upfront configuration necessary to start developing and building a React web app
- Extends from [neutrino-preset-react](https://neutrino.js.org/presets/neutrino-preset-react/)
  - Modern Babel compilation adding JSX and object rest spread syntax
  - Support for React Hot Loader
  - Write JSX in .js or .jsx files 
- Extends from [neutrino-preset-web](https://neutrino.js.org/presets/neutrino-preset-web/)
  - Modern Babel compilation supporting ES modules, last 2 major browser versions, and async functions
  - Webpack loaders for importing HTML, CSS, images, icons, and fonts
  - Webpack Dev Server during development
  - Automatic creation of HTML pages, no templating necessary
  - Hot Module Replacement support
  - Production-optimized bundles with Babili minification and easy chunking
  - Easily extensible to customize your project as needed

## Requirements

- Node.js v6.9+
- Yarn or npm client

## Installation

To get you started fork and clone the `react-starter` repository and install the dependencies using Yarn or the npm client.

```bash
❯ cd react-starter/
❯ yarn
```

## Quick start

### Yarn

```bash 
❯ yarn start
✔ Development server running on: http://localhost:5000
✔ Build completed
```

### npm
````bash
❯ npm start
✔ Development server running on: http://localhost:5000
✔ Build completed
````

## Building

`react-starter` builds static assets to the `build` directory by default when running `yarn build`.

```bash
❯ yarn build
✔ Building project completed
Hash: a3a9a0f61ddbfe6d0df1
Version: webpack 2.6.1
Time: 10664ms
                           Asset       Size    Chunks             Chunk Names
   index.f4accb410f193a07d59b.js    6.72 kB     index  [emitted]  index
polyfill.2f048c34ff815def7987.js    49.2 kB  polyfill  [emitted]  polyfill
 runtime.657c5e7df3c8dd071e60.js    1.55 kB   runtime  [emitted]  runtime
  vendor.6346e2d5798e9a77c2f0.js     180 kB    vendor  [emitted]  vendor
                      index.html  926 bytes            [emitted]
✨  Done in 12.35s.
```

## Running Tests

In order to keep this starter kit minimalist, `react-starter` has no test runner configured, however adding one is incredible easy with Neutrino. Refer to the [relevant section on building and running tests](https://neutrino.js.org/usage.html#building-and-running-tests). 

## Preset options

You can provide custom options and have them merged with this preset's default options to easily affect how this preset builds. You can modify React preset settings from `.neutrinorc.js` by overriding with an options object. Use an array pair instead of a string to supply these options in `.neutrinorc.js`. See the [Web documentation](https://neutrino.js.org/presets/neutrino-preset-web/#preset-options) for specific options you can override with this object.

_Example: Change the application mount ID from "root" to "app" and change the page title:_

```javascript
module.exports = {
  use: [
    ['neutrino-preset-react', {
      html: {
        title: 'Epic React App',
        appMountId: 'app'
      }
    }]
  ]
};
```

## Customizing

By following the [customization guide](https://neutrino.js.org/customization/) and knowing the rule, loader, and plugin IDs above, you can override and augment the build by by providing a function to your `.neutrinorc.js` use array. You can also make these changes from the Neutrino API in custom middleware.

### Vendoring

By defining an entry point named `vendor` you can split out external dependencies into a chunk separate from your application code.

_Example: Put React and React DOM into a separate "vendor" chunk:_

```js
module.exports = {
  use: [
    'neutrino-preset-react',
    (neutrino) => neutrino.config
      .entry('vendor')
        .add('react')
        .add('react-dom')
  ]
};
```

## Contributing

Thank you for wanting to help out with Neutrino! We are very happy that you want to contribute, and have put together the [contributing guide](https://neutrino.js.org/contributing/#contributing) to help you get started. We want to do our best to help you make successful contributions and be part of our community.
