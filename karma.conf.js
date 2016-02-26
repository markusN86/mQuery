// Karma configuration
// Generated on Thu Sep 24 2015 22:37:27 GMT+0200 (CEST)

var webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/jQuery/dist/jquery.js',
            'bower_components/qunit-parameterize/qunit-parameterize.js',
            { pattern: 'src/*.js', watched: true, served: false, included: false },
            'src/mQuery.js',
            'tests/*.tests.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './src/mQuery.js': ['webpack', 'sourcemap', 'coverage']
        },

        plugins: [
            'karma-qunit',
            'karma-phantomjs-launcher',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-coverage'
        ],

        webpack: webpackConfig,

        coverageReporter: {
            dir: '.build/coverage',
            reporters: [
                {type: 'html', subdir: 'html'},
                {type: 'lcov', subdir: 'lcov'},
                {type: 'cobertura', subdir: 'cobertura', file: 'cobertura.txt'}
            ]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
};