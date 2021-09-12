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
          {
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [require('autoprefixer')];
                },
              },
            },
          },
          // Compiles Sass to CSS, Run first
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    // inline is true by default,
    hot: false,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});
