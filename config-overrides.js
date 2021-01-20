const { override, addWebpackPlugin, addBabelPlugins, disableEsLint } = require('customize-cra')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const babelConfig = require('./babel.config')

module.exports = override(
    // Babel import optimize
    addBabelPlugins(...babelConfig.plugins),

    // Disable EsLint
    disableEsLint(),

    // Adding progressbar plugin
    addWebpackPlugin(new SimpleProgressWebpackPlugin({ format: 'compact' }))
)
