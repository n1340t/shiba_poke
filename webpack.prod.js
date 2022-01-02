const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[fullhash:8].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS, Turn CSS into JS
          'css-loader',
          'postcss-loader',
          // Compiles Sass to CSS, Run first
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [['pngquant', { quality: [0.6, 0.8] }]],
        },
      },
    }),
  ],
});
