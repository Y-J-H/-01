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
  devtool: 'inline-source-map',    // 这句代码可以帮助我们追踪到错误出现在那个位置
  devServer: {
    contentBase: './dist'
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