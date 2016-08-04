const webpack = require('webpack')
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// don't need because we are using `env.test` and `evn.prod`
// const isProd = process.env.NODE_ENV === 'production'
// const isTest = process.env.NODE_ENV === 'test'

module.exports = env => {
  const addPlugin = (add, plugin) => add ? plugin : undefined
  const ifProd = plugin => addPlugin(env.prod, plugin)
  const removeEmpty = array => array.filter(i => !!i)
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

        // {
        //   test: resolve('./src/js/app'), loader: 'imports?_=lodash'
        // }

        // {
        //   test: resolve('./src/js/app'), loader: 'exports?someObject=innerObject'
        // }
      ],
    },
    // plugins:removeEmpty([
    //   ifProd(new webpack.optimize.DedupePlugin()),
    //   ifProd(new webpack.LoaderOptionsPlugin({
    //     minimize: true,
    //     debug:false
    //   })),
    //   ifProd(new webpack.DefinePlugin({
    //     'process.env': {
    //       NODE_ENV:'"production"'
    //     }
    //   })),
    //   ifProd(new webpack.optimize.UglifyJsPlugin({
    //     compress:{
    //       screw_ie8: true,// eslint-disable-line
    //       warnings:false,
    //     }
    //   })),
    //   env.test ? undefined : new webpack.optimize.CommonsChunkPlugin({
    //     name:'common',
    //     filename:'bundle.common.js'
    //   })
    // ])
    plugins:[
      env.test ? undefined : new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'bundle.common.js'
      }),
      // env.test ? undefined : new webpack.optimize.CommonsChunkPlugin({
      //   name:'vendor',
      //   chunk:['app', 'vendor']
      // }),
      new HtmlWebpackPlugin({
        template:'./index.html'
      }),
    ].filter(p => !!p)
  }
}
