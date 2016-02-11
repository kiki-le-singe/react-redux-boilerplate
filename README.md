# React Boilerplate

## Introduction

> I started this project to learn tools like [React](https://facebook.github.io/react/), [Redux](https://github.com/rackt/redux), [Webpack](https://webpack.github.io/), [babeljs.io](https://babeljs.io/), [ES6/ES2015](https://babeljs.io/docs/learn-es2015/)... I did it mainly for fun. And then I used it as Boilerplate for my React|Redux projects. So don't worry it works :p. It's not perfect but it works :).

> I use `Framework7` as HTML framework but it's not mandatory. Its implementation with `React` is not perfect. I use it just to simplify my life with HTML/CSS in a mobile context.
You are free to choose another tool. You will need to change some configs and create your own pages, component...

> Enjoy it! :)

## Requirements

 * [nodejs](http://nodejs.org/)

> Node `^5.0.0`

## Optional

 * [Gulp](http://gulpjs.com/)

> Gulp is used to manage icons. I do not use it as builder, so it is not mandatory.

 * [Mongodb](http://www.mongodb.org/)
  * [Install on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
  * [Install on OS X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

> Mongodb is useful if you want used a database. In this project I used a fake API.

## Installation

```shell
$ git clone git@github.com:kiki-le-singe/react-redux-boilerplate.git
$ cd react-redux-boilerplate
$ npm install
```

## Scripts

```shell
$ npm start
```

Starts up express server to serve your app at `localhost:8080`. HMR will be enabled in development. The style guides will be generated in `~/styleguide`.

```shell
$ npm compile
```

It does some optimizations and Compiles the application, for the production, to disk (`~/dist` by default).

```shell
$ npm run dev:debug
```

Same as `npm start`, but displays the redux devtools.

```shell
$ npm run dev:quiet
```

Same as `npm start`, but displays no webpack informations in the terminal.

```shell
$ npm run dev:stub
```

Same as `npm start`, but in stub mode.

```shell
$ npm run test
```

Soon...

```shell
$ npm run deploy
```

Cleans the `dist` folder previously created and compiles your application to disk.

```shell
$ npm prod
```

Starts up express server to serve your app at `localhost:8080`.


```shell
$ npm run lint
```

Lint all `.js` files.

```shell
$ npm run styleguide
```

Build style guides.

```shell
$ node server app.production.js
```

Serves the app in production mode on `localhost:9000`.

> Don't forget to run `npm run deploy` before.

## Gulp Tasks

```shell
$ gulp iconify
```

See ['A mystical CSS icon solution', grunticon-like build system.](https://github.com/gavro/gulp-iconify).

## Configuration

Basic project configuration is in `~/config/index.js`

## Structure

```
.
└── __tests__                # Unit tests (Soon...)
├── config                   # Project configuration settings (Server, Webpack, ...)
├── gulp                     # Gulp configuration tasks
├── server                   # Express application (uses webpack middleware)
│   └── server.dev.js        # Server dev application
│   └── server.production.js # Server prod application
├── src                      # Application source code
│   ├── assets               # Static assets
│   ├── components           # Generic React Components
│   ├── config               # Project configuration settings (api, ...)
│   ├── containers           # Root components (Redux Provider, Router, DevTools, ...)
│   ├── layouts              # Components page structure
│   ├── redux                # Redux actions|constants|middleware|reducers|store
│   ├── routes               # Application route definitions
│   ├── services             # All kinds of services (Email, User, ...)
│   ├── styles               # Application-wide styles
│   └── index.js             # Application bootstrap and rendering
├── styleguide               # Application style guides
├── webpack                  # Environment-specific configuration files for webpack
```

## Webpack

### Configuration

The webpack compiler configuration is located to the root:

* `~/webpack/dev.config.js`
> Webpack configuration for the development mode.
* `~/webpack/prod.config.js`
> Webpack configuration for the production mode.
* `~/webpack/styleguide.config.js`
> Webpack configuration to build assets for the style guides.

You can also see the `~/.babelrc` configuration file.

### Vendor Bundle

These default to:

```js
[
  'react',
  'react-router',
  'redux',
  'lodash',
  'framework7',
  'classnames',
  'superagent'
]
```

### Globals

These are global variables available to you anywhere in your source code. They can be found  in `~/config/index.js`.

```js
new webpack.DefinePlugin({
  __CLIENT__: projectConfig.__CLIENT__,
  __SERVER__: projectConfig.__SERVER__,
  __DEV__: projectConfig.__DEV__,
  __PROD__: projectConfig.__PROD__,
  __DEBUG__: projectConfig.__DEBUG__
})
```

## Styles

You can use `.css` file extensions using the latest CSS syntax with `PostCSS-cssnext`. See the `~/src/styles` directory. `mdcss` is used to generate a style guide of the application, you can see both the [repository](https://github.com/jonathantneal/mdcss) and the [official documentation](http://jonathantneal.github.io/mdcss-theme-github/demo/).

## Features

 * [React](https://facebook.github.io/react/)
 * [React Router](https://github.com/rackt/react-router)
 * [Redux](https://github.com/rackt/redux)
 * [Redux DevTools](https://github.com/gaearon/redux-devtools)
 * [Lo-Dash](http://lodash.com/)
 * [classnames](https://www.npmjs.com/package/classnames)
 * [superagent](https://github.com/visionmedia/superagent)
 * [Express](http://expressjs.com/)
 * [cssnext](http://cssnext.io/)
 * [Framework7](http://www.idangero.us/framework7/)

> Framework7 is used as HTML framework to develop hybrid mobile apps or web apps. You can use what you want.

## Build Tools

 * [ESlint](http://eslint.org/)
  * [Airbnb's .eslintrc](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
 * [Babel](https://babeljs.io/)
 * [Webpack](https://github.com/webpack/webpack)
 * [PostCSS](https://github.com/postcss/postcss)
  * [A searchable catalog of PostCSS plugins](http://postcss.parts/)

## API

By default the root access for the API is http://localhost:8080/api. Available example: http://localhost:8080/api/tools

## Sources

 * [React Getting Started](https://facebook.github.io/react/docs/getting-started.html)
 * [React tutorial](https://facebook.github.io/react/docs/tutorial.html)
 * [React Router](https://github.com/rackt/react-router)
  * [React Router Tutorial](https://github.com/rackt/react-router-tutorial)
  * [Upgrade Guide](https://github.com/rackt/react-router/tree/master/upgrade-guides)
 * [Redux](https://github.com/rackt/redux)
 * [Redux Middleware](http://redux.js.org/docs/advanced/Middleware.html)
 * [Redux applyMiddleware](http://redux.js.org/docs/api/applyMiddleware.html)
 * [Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a#.jky3inddd)
 * [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)
 * [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
 * [Framework7](http://www.idangero.us/framework7/get-started/)
 * [React Webpack Cookbook](http://christianalfoni.github.io/react-webpack-cookbook/index.html)
 * [Webpack](http://webpack.github.io/docs/)
 * [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## Tips and tricks

 * [mongo-express](https://www.npmjs.org/package/mongo-express)

 > If you use MongoDB, look at this node modules. It's an convenient admin interface for MongoDB.

 * [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

 > Allows you to inspect the React component hierarchy.

 * [Show me the React!](https://chrome.google.com/webstore/detail/show-me-the-react/iaebolhfcmodobkanmaahdhnlplncbnd?hl=en-US&gl=US)

 > Highlight React components on the page.

### Contexts

 * [Contexts in React](https://facebook.github.io/react/docs/context.html)

 > Contexts allow to pass values through a tree without having to use props.

### ES6 Classes

 * [React's Blog](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes)
 * [React's Docs](https://facebook.github.io/react/docs/reusable-components.html#es6-classes)
 * [Example of components in ES6](https://github.com/soundblogs/react-soundplayer/tree/master/src/components)
 * [React on ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)

### Autobinding/No Autobinding

* [Autobinding](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding)
* [No Autobinding](https://facebook.github.io/react/docs/reusable-components.html#no-autobinding)

> In React's class model you'll have to explicitly use .bind(this) or arrow functions =>.
> See also [Can't get `this.prop` when use ES6 classes in React](https://github.com/facebook/react/issues/4425) and [Why this.setState is undefined in React ES6 class?](https://github.com/goatslacker/alt/issues/283)
