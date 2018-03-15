const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,     // 查找所有以css结尾的文件
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}