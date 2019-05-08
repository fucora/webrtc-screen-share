const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    offer: './src/front/offer.ts',
    answer: './src/front/answer.ts'
  },
  output: {
    path: path.resolve(__dirname, 'build/front'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}