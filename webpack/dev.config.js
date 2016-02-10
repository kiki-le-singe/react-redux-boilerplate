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
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      paths('entryApp'),
    ],

    // http://christianalfoni.github.io/react-webpack-cookbook/Split-app-and-vendors.html
    vendors: projectConfig.VENDOR_DEPENDENCIES,
  },
  output: {
    path: '/',
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {},

    // https://github.com/webpack/docs/wiki/configuration#resolveroot
    // See: http://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack
    // Resolve the `./src` directory so we can avoid writing
    // ../../styles/base.css but styles/base.css
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
    // http://webpack.github.io/docs/loaders.html
    // http://webpack.github.io/docs/list-of-loaders.html
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
  // https://github.com/postcss/postcss-loader
  // http://cssnext.io/postcss/
  postcss: webpack => ([ // eslint-disable-line
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-url')(),
    require('postcss-cssnext')(),
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
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
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'React Redux Boilerplate',
      hash: true,
      favicon: path.resolve(assetsDir, 'favicon.ico'),
      inject: 'body',
      template: path.resolve(srcDir, 'index.tpl.html'),
    }),

    // https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
    new webpack.optimize.OccurenceOrderPlugin(),

    // switch the server to hot mode
    new webpack.HotModuleReplacementPlugin(),

    // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
    new webpack.NoErrorsPlugin(),

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

    // https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    new webpack.optimize.DedupePlugin(),
  ],
};

// Optimizing rebundling: http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-rebundling.html
// http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-development.html
deps.forEach(dep => {
  const depPath = path.resolve(nodeModulesDir, dep);

  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

export default config;
