const path = require('path');
const { updateConfig } = require('react-app-rewire-antd-theme');

const options = {
  // varFile: path.join(__dirname, './src/less/variable.less'),
  stylesDir: path.join(__dirname, './src/less'),
  antDir: path.join(__dirname, './node_modules/antd'),
  // colorFilePath: path.join(__dirname, './public/color.less'),
  themeVariables: ['@primary-color', '@secondary-color', '@text-color-secondary', '@text-color']
}
module.exports = function override(config, env) {
  config = updateConfig(config, env, options)
  return config;
};