# React Boilerplate

## Introduction

> This project is mainly to train with tools like [babeljs.io](https://babeljs.io/), [React](https://facebook.github.io/react/), [Flux](https://facebook.github.io/flux/), ES6/ES2015... And then I used it as Boilerplate for my react projects.

## Requirements

 * [nodejs](http://nodejs.org/)
 * [sass](http://sass-lang.com/)

## Optional

 * [Gulp](http://gulpjs.com/)
 * [Mongodb](http://www.mongodb.org/)
  * [Install on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
  * [Install on OS X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

## Installation

* `$ git clone git@github.com:kiki-le-singe/react-flux-boilerplate.git`
* `$ cd react-flux-boilerplate`
* `$ npm install`

## Scripts

* `$ npm start`

Built the project and starts a web service on `localhost:8080`. It uses a proxy to hit on `localhost:9000` and to consume the api.

* `$ npm run build`

Built the project.

> Results is located in the ./build directory.

* `$ npm run deploy`

It does some optimizations and builds the project for the production.

> Results is located in the ./dist directory.

* `$ node server app.production.js`

Serves the app in production mode on `localhost:9000`.

> Don't forget to run `npm run deploy` before.

## Gulp Tasks

* `$ gulp iconify`

See ['A mystical CSS icon solution', grunticon-like build system.](https://github.com/gavro/gulp-iconify).

## Included JavaScript libraries

 * [React](https://facebook.github.io/react/)
 * [React Router](https://github.com/rackt/react-router)
 * [Flux](https://facebook.github.io/flux/)
 * [jQuery](http://jquery.com/)
 * [Lo-Dash](http://lodash.com/)
 * [classnames](https://www.npmjs.com/package/classnames)
 * [superagent](https://github.com/visionmedia/superagent)
 * [Framework7](http://www.idangero.us/framework7/)

## Build Tools

 * [ESlint](http://eslint.org/)
  * [React .eslintrc](https://github.com/facebook/react/blob/master/.eslintrc)
 * [Babel](https://babeljs.io/)
 * [Webpack](https://github.com/webpack/webpack)

## API

By default the root access for the API is http://localhost:8080/api. Available example: http://localhost:8080/api/tools

## Sources

 * [Getting Started](https://facebook.github.io/react/docs/getting-started.html)
 * [React tutorial](https://facebook.github.io/react/docs/tutorial.html)
 * [React Router](https://github.com/rackt/react-router)
  * [Upgrade Guide](https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md)
  * [React Router Histories](https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md)
 * [Flux](https://facebook.github.io/flux/)
 * [Framework7](http://www.idangero.us/framework7/get-started/)
 * [React Webpack Cookbook](http://christianalfoni.github.io/react-webpack-cookbook/index.html)
 * [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## Tips and tricks

 * [mongo-express](https://www.npmjs.org/package/mongo-express)

 > If you use MongoDB, look at this node modules. It's an convenient admin interface for MongoDB.

 * [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

 > Allows you to inspect the React component hierarchy.

 * [Show me the React!](https://chrome.google.com/webstore/detail/show-me-the-react/iaebolhfcmodobkanmaahdhnlplncbnd?hl=en-US&gl=US)

 > Highlight React components on the page.

### Contexts

 * [Contexts in React](https://facebook.github.io/react/blog/2014/03/28/the-road-to-1.0.html#context)
 * [Introduction to contexts in reactjs](https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html)

 > Contexts allow to pass values through a tree without having to use props.

### ES6 Classes

 * [React's Blog](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes)
 * [React's Docs](https://facebook.github.io/react/docs/reusable-components.html#es6-classes)
 * [Example of components in ES6](https://github.com/soundblogs/react-soundplayer/tree/master/src/components)
 * [React on ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)

#### Autobinding/No Autobinding

* [Autobinding](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding)
* [No Autobinding](https://facebook.github.io/react/docs/reusable-components.html#no-autobinding)

> In React's class model you'll have to explicitly use .bind(this) or arrow functions =>.
> See also [Can't get `this.prop` when use ES6 classes in React](https://github.com/facebook/react/issues/4425) and [Why this.setState is undefined in React ES6 class?](https://github.com/goatslacker/alt/issues/283)

### Experimental ES7 features

 * [Babel - What are the various transformers?](http://babeljs.io/docs/advanced/transformers/)
 * [Babel - How to use experimental ES7 features](https://babeljs.io/docs/usage/experimental/)
 * [babelify](https://www.npmjs.com/package/babelify)

 > babelify - Set stage option to 0 for to have all ES7 experimental features
