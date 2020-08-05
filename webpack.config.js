const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common');

const envConfig = {
  'production': require('./webpack.config.prod'),
  'development': require('./webpack.config.dev'),
}

module.exports = merge(envConfig[process.env.NODE_ENV], commonConfig);
