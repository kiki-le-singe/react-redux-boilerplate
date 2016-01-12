/* eslint-disable */

// PACKAGES
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// PATHS/DIRECTORIES
const srcDir = path.resolve(__dirname, 'src');
const assetsDir = path.resolve(__dirname, 'src/assets');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const framework7JSDir = path.resolve(nodeModulesDir, 'framework7/dist/js');

const config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build_styleguide'),
    filename: 'app.js',
  },
  resolve: {
    root: [srcDir, framework7JSDir],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        include: [srcDir],
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: [srcDir],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: 'file?name=img/[name].[ext]',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]',
      },
    ],
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new CopyWebpackPlugin([
      { from: assetsDir + '/images/logos/react.svg' },
    ]),
  ]
};

module.exports = config;
