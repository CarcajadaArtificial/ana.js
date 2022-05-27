const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/ts/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/ana'),
    filename: 'ana.js',
    publicPath: '/dist/ana/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}