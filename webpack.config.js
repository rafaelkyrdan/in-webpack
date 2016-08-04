const webpack = require('webpack')
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// don't need because we are using `env.test` and `evn.prod`
// const isProd = process.env.NODE_ENV === 'production'
// const isTest = process.env.NODE_ENV === 'test'

module.exports = env => {
  return {
    entry: {
      app: './js/app.js',
      vendor:['lodash'],
    },
    output: {
      filename: 'bundle.[name].[chunkhash].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/},
        {test: /\.css$/, loader: 'style!css'},
      ],
    },
    plugins:[
      env.test ? null : new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'bundle.common.js'
      }),
      env.test ? null : new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
      }),
      new HtmlWebpackPlugin({
        template:'./index.html'
      }),
    ].filter(p => !!p)
  }
}
