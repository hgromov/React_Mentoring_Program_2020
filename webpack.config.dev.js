const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 5000,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
