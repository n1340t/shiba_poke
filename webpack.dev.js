const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development', // "production" | "development" | "none",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './asset'),
    //inline is true by default,
    hot: false,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});
