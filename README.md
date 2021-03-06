# mfui [![Travis](https://img.shields.io/travis/joakin/mfui.svg?maxAge=2592000)]() [![npm](https://img.shields.io/npm/v/mfui.svg?maxAge=2592000)]()

Wikimedia Mobile UI: components from wikimedia mobile sites

## Usage

In the `build/` folder you can find the production ready assets. `jQuery` and
`OO` are required on the page for using the components.

## Development

Node 6 & npm 3 required. Install the dependencies with

    npm install

Start the development compiler with

    npm start

* Watches assets and automatically recompiles the examples into
  `docs/examples/`
* Open `docs/index.html` and develop with the examples in mind

Run tests, generate docs and examples, and build production assets with

    npm run ci

Build the examples with

    npm run examples

Build the assets for production with

    npm run build

You can run the unit tests with

    npm run test:js

Also, you can run the units continuously with

    npm run test:js -- -w
