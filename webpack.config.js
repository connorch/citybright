var debug = process.env.NODE_ENV !== "production"
var webpack = require('webpack');
var path = require('path');

//path: __dirname + "/dist/js"

var config = {
   context: path.join(__dirname, "src"),
   devtool: debug ? "inline-sourcemap" : false, 
   entry: './js/client.js',
   output: {
      path: __dirname + "/src/",
      filename: 'client.min.js',
   },
   devServer: {
      inline: true,
      port: 3232
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower-components)/,
            loader: 'babel-loader',
        
            query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
         }
      ]
   },
   plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
   ]
}

module.exports = config;

/*
plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
   ]
*/