const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development', // "production" | "development" | "none",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS, Turn CSS into JS
          'css-loader',
          'postcss-loader',
          // Compiles Sass to CSS, Run first
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './'),
    },
    // inline is true by default,
    hot: false,
    open: true,
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  },
});
