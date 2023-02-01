const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: './index.js',
    utils: './utils.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader, // 创建一个 link 标签
        'css-loader', // css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖
      ],
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }),
  ]
}
