let webpack = require("webpack"),//build tool,configuration, minification and bundling tool
path = require("path"), //path module of node framework
DIST_DIR = path.resolve(__dirname,"dist"), // distribution directory
SRC_DIR = path.resolve(__dirname,"src"), // source directory
HtmlWebpackPlugin = require('html-webpack-plugin'),
//UglifyJSPlugin = require('uglifyjs-webpack-plugin'), //to remove extra spaces, unused variables, commented code etc (minification)

webpackConfig = {
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js'
          },
           // webpack 5 comes with devServer which loads in development mode
          devServer: {
            port: 3000,
            //watchContentBase: true
          },
           // Rules of how webpack will take our files, complie & bundle them for the browser 
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              }
            ]
          },
          plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

module.exports = webpackConfig;