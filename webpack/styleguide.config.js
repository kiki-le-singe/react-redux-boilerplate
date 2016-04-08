import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import _debug from 'debug';

import { paths } from '../config';

const debug = _debug('app:webpack:config:styleguide');
const srcDir = paths('src');
const assetsDir = paths('assets');

debug('Create configuration.');
const config = {
  entry: paths('entryApp'),
  output: {
    path: paths('styleguideBuild'),
    filename: 'app.js',
  },
  resolve: {
    root: [srcDir],
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
        loader: 'json',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
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
  postcss: webpack => ([ // eslint-disable-line
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-url')(),
    require('postcss-cssnext')(),
    require('mdcss')({
      theme: require('mdcss-theme-github')({
        title: 'Style Guide of React Redux Boilerplate',
        logo: '../build_styleguide/react.svg',
        examples: {
          base: '../',
          css: ['build_styleguide/app.css'],
        },
      }),
    }),
  ]),
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new CopyWebpackPlugin([
      { from: `${assetsDir}/images/logos/react.svg` },
    ]),
  ],
};

export default config;
