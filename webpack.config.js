var webpack = require("webpack");   

module.exports = {
    entry: "./src/mQuery.js",
    output: {
        libraryTarget: "umd",
        filename: "mQuery.js",
        path: "./dist"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "mQuery.js.map"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ["$", "exports", "require"]
            }
        })
    ]
};
