module.exports = {
    entry: "./src/mQuery.js",
    output: {
        filename: "./dist/mQuery.packed.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader"
        }, {
            test: /\.js$/,
            loader: "eslint-loader"
        }]
    },
    eslint: {
        configFile: ".eslintrc"
    }
};
