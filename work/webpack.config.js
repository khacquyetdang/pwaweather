const path = require('path');

module.exports = {
  entry: './scripts/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};