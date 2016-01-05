// LIST OF LOADERS: http://webpack.github.io/docs/list-of-loaders.html
// WEBPACK DEV SERVER: http://webpack.github.io/docs/webpack-dev-server.html
// webpack for browserify users: https://github.com/webpack/docs/wiki/webpack-for-browserify-users
// webpack + font-awesome: https://gist.github.com/Turbo87/e8e941e68308d3b40ef6

// TUTORIALS:
  // - webpack-dev-server and a node server
    // - http://ctheu.com/2015/05/14/using-react-hot-loader-with-a-webpack-dev-server-and-a-node-server/
    // - http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup
  // - http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/
  // - http://christianalfoni.github.io/react-webpack-cookbook/index.html
  // - http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
  // - http://putaindecode.fr/posts/webpack/premier-exemple/
  // - http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/
  // - http://www.occitech.fr/blog/2015/03/webpack-react-es6/
  // - http://julienrenaux.fr/2015/03/30/introduction-to-webpack-with-practical-examples/
  // - http://bensmithett.com/smarter-css-builds-with-webpack/

/* eslint-disable */

// PACKAGES
const webpack = require('webpack');
const path = require('path');
// https://github.com/webpack/extract-text-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// https://github.com/ampedandwired/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// CONFIG
const projectConfig = require('./config');

// PATHS/DIRECTORIES
const srcDir = path.resolve(__dirname, 'src');
const assetsDir = path.resolve(__dirname, 'src/assets');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const framework7JSDir = path.resolve(nodeModulesDir, 'framework7/dist/js');
const framework7CSSDir = path.resolve(nodeModulesDir, 'framework7/dist/css');
const FontAwesomeSCSSDir = path.resolve(nodeModulesDir, 'font-awesome/scss');

const deps = [
  'framework7/dist/js/framework7.min.js',
  'font-awesome/css/font-awesome.min.css'
];

const vendorDependencies = [
  'history',
  'react',
  'react-router',
  'redux',
  'redux-simple-router',
  'lodash',
  'framework7',
  'classnames',
  'superagent'
];

const config = {
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './src/index'
    ],

    // http://christianalfoni.github.io/react-webpack-cookbook/Split-app-and-vendors.html
    vendors: vendorDependencies
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {},

    // Resolve the `./src` directory so we can avoid writing
    // ../../styles/base.css but styles/base.css
    modulesDirectories: ['node_modules', './src'],

    // https://github.com/webpack/docs/wiki/configuration#resolveroot
    // See: http://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack
    root: [FontAwesomeSCSSDir, framework7CSSDir, framework7JSDir],

    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: [],

    preLoaders: [
      {
        test: /\.js[x]?$/,
        loader: 'eslint',
        include: [srcDir],
      }
    ],
    // http://webpack.github.io/docs/loaders.html
    // http://webpack.github.io/docs/list-of-loaders.html
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
        include: [srcDir]
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: [srcDir]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: 'file?name=img/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Redux Boilerplate',
      hash: true,
      favicon: path.resolve(assetsDir, 'build/favicon.ico'),
      inject: 'body',
      template: path.resolve(assetsDir, 'build/index.tpl.html')
    }),
    new HtmlWebpackPlugin({ // Also generate a 404.html
      title: 'Page Not Found :(',
      filename: '404.html',
      template: path.resolve(assetsDir, 'build/404.tpl.html')
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),

    // https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
    new webpack.optimize.OccurenceOrderPlugin(),

    // switch the server to hot mode
    new webpack.HotModuleReplacementPlugin(),

    // causes error avec eslint-loader, comment for now.
    // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
    // new webpack.NoErrorsPlugin(),

    // http://christianalfoni.github.io/react-webpack-cookbook/Split-app-and-vendors.html
    new webpack.optimize.CommonsChunkPlugin('vendors', '[name].[hash].js'),

    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      __CLIENT__: projectConfig.__CLIENT__,
      __SERVER__: projectConfig.__SERVER__,
      __DEV__: projectConfig.__DEV__,
      __PROD__: projectConfig.__PROD__,
      __DEBUG__: projectConfig.__DEBUG__
    }),
  ]
};

// Optimizing rebundling: http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-rebundling.html
// http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-development.html
deps.forEach(function (dep) {
  const depPath = path.resolve(nodeModulesDir, dep);

  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
