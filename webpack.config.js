
const path = require('path');
const webpack = require('webpack');

const config = {
    entry:  __dirname + '/src/js/app.js',
    output: {
         path: __dirname + '/dist',
        filename: 'main.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    quiet: true
                }
              }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({    
            compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
              },
            comments: false  
        })
    ]

};
module.exports = config;