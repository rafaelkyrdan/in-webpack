# in-webpack
Exploring webpack in practice.

## Path(Each step in the separate commit).
1. We initiate the project with `es6-todo` app.
2. We use `webpack-validator` to validate our webpack config. For instance,
if you make a mistake in the file, add a semicolon at the end of the file and
run the command `npm run validate-webpack:dev` or `npm run validate-webpack:prod` - it will show you the mistake. So no need to guess why something goes wrong. Enjoy.
3. Tree-shaking with webpack 2 and Babel 6 allows us to exclude unused exports from bundles.
For instance, in the file `helpers.js` we have a function `addClass` which we export to `app.js`
but we don't use it there. So webpack drop this function from bundle.
4. Webpack allows us to add a hash to file url. First add a `chunkhash` property
in the `webpack.config.js` to filename. Then add the `html-webpack-plugin` which will
simplify creation `index.html` for bundle. Everytime when we change the source files
webpack will create a new hash.
5. In order to optimize cashing we can separate our bundle on 2 bundles:
one for vendor libraries and second one for our source code. So browsers can cash
vendor's bundle for longer time. We use `Webpack CommonsChunkPlugin` to group vendor's files.
In the `webpack.config.js` we edit `entry` and `output` section.
6. The same plugin `Webpack CommonsChunkPlugin` we can use to create a bundle with
common files for different apps.
7. With `Webpack Production plugins` we size and perfomance. `DedupePlugin` searchs for
or equal or similar files and deduplicate them in the output. `UglifyJsPlugin` -
minimize all JavaScript output of chunks. With `LoaderOptionsPlugin` we can put loaders
into minimize mode.
8. With `imports-loader` module for `webpack` import variables into scope.
