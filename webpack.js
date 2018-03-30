const webpack = require('webpack');
require('colors');

const compiler = webpack(require('./webpack.config.js'));

compiler.run((error, stats) => {
  const info = stats.toJson();

  if (stats.hasErrors()) {
    info.errors.forEach((elem) => {
      console.error(elem.red);
    });
  }

  if (stats.hasWarnings()) {
    info.warnings.forEach((elem) => {
      console.warn(elem.yellow);
    });
  }
});