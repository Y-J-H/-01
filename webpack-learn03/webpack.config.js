const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      file: 'index.html',
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        // exclude: []    不匹配选项
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 这里指的是字节单位是b
              name: 'images/[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {           // 打包html中的图片
        test: /\.html$/,
        loader: 'html-withimg-loader'
      }
    ]
  },
  resolve: {
    extensions: [".vue", ".json", ".styl", ".js", ".css"],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}