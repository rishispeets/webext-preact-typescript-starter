# Web Extension Preact Typescript Starter

> Extensions can extend and modify the capability of a browser. Extensions for Firefox are built using the WebExtensions API, a cross-browser system for developing extensions. To a large extent the system is compatible with the extension API supported by Google Chrome and Opera and the W3C Draft Community Group. Extensions written for these browsers will in most cases run in Firefox or Microsoft Edge with just a few changes. - [MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)

Like the title has kind of given away, this is a simple starter template for Web Extensions. I've found Preact to be an exceptional fit for Web Extensions due to it's compact size, and small but adequate API.

This starter does not include a state management library. If you would like a light weight solution, you can take a look at [preact-context](https://github.com/valotas/preact-context). Otherwise, a framework-agnostic one like [Redux](https://redux.js.org/) also works.

The following technologies are used:

- ⚛️ Preact
- 🖋 TypeScript
- 🃏 Jest
- 💅 Styled Components
- 📦 Webpack (yes, this is the icon Parcel uses, I don't caaare)

The usage of these frameworks/libraries is probably overkill for very small extensions (but the DX is oh-so-good 😎).

Note that since different browsers are at different stages and/or have different implementations of the Web Extension API, I highly suggest targeting one browser, and making the necessary tweaks to port to a different browser. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the finished extension.

### Prerequisites

- Node: version >= 8.0.0
- npm: version >= 6.0.0

All other necessary development dependencies will be installed when you run `npm install` in the root directory.

### Installing

1.  Clone or fork the repository.

```
git clone https://github.com/rishispeets/webext-preact-typescript-starter
```

2.  Install dependencies (from root).

```
npm install
```

3.  Start the `Webpack` dev server.

```
npm run build
```

4.  Start the `web-ext` development environment in a new terminal. This should start up a new window of your default browser with the extension running.

```
cd extension &&
web-ext run -v
```

Now you're able to make changes in the code that will be reflected in the running extension immediately. The Webpack development server takes care of the `Hot Module Reloading`, while the `web-ext` tool monitors the built code and reloads the extension whenever a changes has happened.

**Build artifects are in `/extension/dist`, while static files are in `/extension`.**

## Running the tests

Tests can be created with Jest in `.ts` files in the `__tests__` folder. A simple example is included. The `preact-render-spy` package gives us a thin abstraction layer with which to test the Preact VDOM.

Note: currently, no test coverage is collected, but this can easily be enabled in the Jest config.

### Run unit tests

1.  Execute Jest.

```
npm run build
```

### And coding style tests

Linting and formatting is done with TSLint and Prettier.

```
npm run lint
```

## Deployment

When you're done with developing your extension, you can build the extension for distribution.

```
web-ext build
```

The instructions for publishing your extension are different for Chrome, Firefox and others. The following links explain the process for Chrome and Firefox. 

- [Chrome](https://developer.chrome.com/webstore/publish)
- [Firefox](https://developer.mozilla.org/en-US/Add-ons/Distribution)

## Contributing

PRs and issues are welcome.

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License by Rishi Speets - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Preact project
- TypeScript project
- preact-boilerplate
- TypeScript React starter
