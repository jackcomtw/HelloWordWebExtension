const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack'); // 引入 webpack


module.exports = {
  entry: {
    index: './src/index.js',
    activePage: './src/activePage.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    minimize: true, // 啟用代碼壓縮
    minimizer: [new TerserPlugin()] // 使用 TerserPlugin 進行壓縮
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        // { from: 'src/manifest.json', to: 'manifest.json' },
        // { from: 'src/images', to: 'images' },
        // { from: 'src/background.js', to: 'background.js' },
        // { from: 'src/index.html', to: 'index.html' }
        { from: 'src', to: '' } 
      ]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })        
  ]
};