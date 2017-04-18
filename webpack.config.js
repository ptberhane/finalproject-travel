const path = require('path')

module.exports = {
  context: __dirname,
  entry: './imports.js',
  devtool: 'source-map',
  output: {
    publicPath: path.join(__dirname, '/public'),
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    },
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve('js'),
          path.resolve('node_modules/preact-compat/src')
        ]
      }
    ]
  }
}
