const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/form-validation/',  // Add this line - must match your repo name
  }
});
