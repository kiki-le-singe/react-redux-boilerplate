import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { paths } from '../config';

const srcDir = paths('src');
const assetsDir = paths('assets');
const framework7JSDir = paths('framework7JS');

const config = {
  entry: paths('entryApp'),
  output: {
    path: paths('styleguideBuild'),
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
