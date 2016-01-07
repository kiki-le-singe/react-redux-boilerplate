// http://christianalfoni.github.io/react-webpack-cookbook/Structuring-configuration.html

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

const HTMLMinifier = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  removeCDATASectionsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeAttributeQuotes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  minifyJS: true,
  minifyCSS: true
};

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
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),

    // http://christianalfoni.github.io/react-webpack-cookbook/Split-app-and-vendors.html
    vendors: vendorDependencies
  },
  resolve: {

    // https://github.com/webpack/docs/wiki/configuration#resolveroot
    // See: http://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack
    // Resolve the `./src` directory so we can avoid writing
    // ../../styles/base.css but styles/base.css
    root: [srcDir, framework7JSDir],

    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  module: {
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
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
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
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('autoprefixer')({ browsers: [ 'last 2 versions' ] }),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Redux Boilerplate',
      hash: true,
      favicon: path.resolve(assetsDir, 'favicon.ico'),
      minify: HTMLMinifier,
      inject: 'body',
      template: path.resolve(srcDir, 'index.tpl.html')
    }),
    new HtmlWebpackPlugin({ // Also generate a 404.html
      title: 'Page Not Found :(',
      filename: '404.html',
      minify: HTMLMinifier,
      template: path.resolve(srcDir, '404.tpl.html')
    }),
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),

    // optimizations
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // https://github.com/webpack/docs/wiki/optimization#minimize
    // https://github.com/webpack/docs/wiki/optimization#deduplication
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),

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

module.exports = config;
