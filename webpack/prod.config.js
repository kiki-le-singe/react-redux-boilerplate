// http://christianalfoni.github.io/react-webpack-cookbook/Structuring-configuration.html

import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import projectConfig, { paths } from '../config';

const srcDir = paths('src');
const assetsDir = paths('assets');
const framework7JSDir = paths('framework7JS');

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
  minifyCSS: true,
};

const config = {
  devtool: 'source-map',
  entry: {
    app: paths('entryApp'),
    vendors: projectConfig.VENDOR_DEPENDENCIES,
  },
  resolve: {
    root: [srcDir, framework7JSDir],
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: paths('dist'),
    filename: '[name]-[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
        include: [srcDir],
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: [srcDir],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss'),
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
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
  ]),
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Redux Boilerplate',
      hash: true,
      favicon: path.resolve(assetsDir, 'favicon.ico'),
      minify: HTMLMinifier,
      inject: 'body',
      template: path.resolve(srcDir, 'index.tpl.html'),
    }),
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true,
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
        drop_console: true,
      },
      output: {
        comments: false,
      },
    }),

    // http://christianalfoni.github.io/react-webpack-cookbook/Split-app-and-vendors.html
    new webpack.optimize.CommonsChunkPlugin('vendors', '[name].[hash].js'),

    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      __CLIENT__: projectConfig.__CLIENT__,
      __SERVER__: projectConfig.__SERVER__,
      __DEV__: projectConfig.__DEV__,
      __PROD__: projectConfig.__PROD__,
      __DEBUG__: projectConfig.__DEBUG__,
    }),
  ],
};

export default config;
