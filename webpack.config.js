const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push("webpack-dev-server/client?http://localhost:8080");
  }

  return sources;
}

const basePlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
  new webpack.DefinePlugin({
    __PRODUCTION__: process.env.NODE_ENV === 'production'
  }),
];

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.optimize.UglifyJsPlugin({
  //   compressor: {
  //     warnings: false,
  //   },
  // }),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins);


module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : '',
  entry: {
    bundle: getEntrySources(['./src/index']),
  },
  output: {
    publicPath: '/',
    filename: process.env.NODE_ENV !== 'production' ?
      'bundle.js' :
      '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: plugins,
  resolve: {
    alias: {
      api: path.join(__dirname, 'src', 'api'),
      actions: path.join(__dirname, 'src', 'actions'),
      devtools: path.join(__dirname, 'src', 'devtools'),
      reducers: path.join(__dirname, 'src', 'reducers'),
      components: path.join(__dirname, 'src', 'components'),
      store: path.join(__dirname, 'src', 'store'),
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader!cssnext-loader',
      },
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['react-hot', 'babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?prefix=img/&limit=5000',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader?prefix=font/&limit=5000',
      },
    ],
  },
};
