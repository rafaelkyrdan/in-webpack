# in-webpack
Exploring webpack in practice.

## Path.
1. We initiate the project with `es6-todo` app.
2. We use `webpack-validator` to validate our webpack config. For instance,
if you make a mistake in the file, add a semicolon at the end of the file and
run the command `npm run validate-webpack:dev` or `npm run validate-webpack:prod` - it will show you the mistake. So no need to guess why something goes wrong. Enjoy.
3. Tree-shaking with webpack 2 and Babel 6 allows us to exclude unused exports from bundles.
For instance, in the file `helpers.js` we have a function `addClass` which we export to `app.js`
but we don't use it there. So webpack drop this function from bundle.
4. ...
