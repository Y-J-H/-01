const path = require('path');
// 下面这个插件会自动为我们生成一个index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 下面这个插件会为我们在每次构建的时候清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
}