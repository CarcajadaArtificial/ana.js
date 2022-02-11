const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/ts/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'ana.js',
    publicPath: '/dist/js/'
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