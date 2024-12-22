const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js', // 輸出文件名
    path: path.resolve(__dirname, '../dist') // 輸出目錄
  },
  mode: 'development', // 默認模式
  module: {
    rules: [
      {
        test: /\.js$/, // 處理所有 .js 文件
        exclude: /node_modules/, // 排除 node_modules 目錄
        use: {
          loader: 'babel-loader', // 使用 Babel 轉譯
          options: {
            presets: ['@babel/preset-env'] // 使用 @babel/preset-env 預設
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json', to: '' },
        { from: 'src/index.html', to: '' },
        { from: 'src/background.js', to: '' },
        { from: 'src/images', to: 'images' }
      ]
    })
  ]
};