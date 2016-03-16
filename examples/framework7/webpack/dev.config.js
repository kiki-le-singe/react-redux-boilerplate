import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import projectConfig, { paths } from '../config';

const srcDir = paths('src');
const assetsDir = paths('assets');
const nodeModulesDir = paths('nodeModules');
const framework7JSDir = paths('framework7JS');

const deps = [
  'redux/dist/redux.min.js',
  'framework7/dist/js/framework7.min.js',
  'font-awesome/css/font-awesome.min.css',
];

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      paths('entryApp'),
    ],
    vendors: projectConfig.VENDOR_DEPENDENCIES,
  },
  output: {
    path: '/',
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {},
    root: [srcDir, framework7JSDir],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    noParse: [],

    preLoaders: [
      {
        test: /\.js[x]?$/,
        loader: 'eslint',
        include: [srcDir],
      },
    ],
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
        loader: 'json',
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
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
      title: 'React Redux Boilerplate - Framework7 example',
      hash: true,
      favicon: path.resolve(assetsDir, 'favicon.ico'),
      inject: 'body',
      template: path.resolve(srcDir, 'index.tpl.html'),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', '[name].[hash].js'),
    new webpack.DefinePlugin({
      __CLIENT__: projectConfig.__CLIENT__,
      __SERVER__: projectConfig.__SERVER__,
      __DEV__: projectConfig.__DEV__,
      __PROD__: projectConfig.__PROD__,
      __DEBUG__: projectConfig.__DEBUG__,
    }),
    new webpack.optimize.DedupePlugin(),
  ],
};

deps.forEach(dep => {
  const depPath = path.resolve(nodeModulesDir, dep);

  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

export default config;
