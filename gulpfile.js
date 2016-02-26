var gulp = require("gulp"),
    gutil = require("gulp-util"),
    babel = require("gulp-babel"),
    eslint = require("gulp-eslint"),
    Server = require("karma").Server,
    coveralls = require("gulp-coveralls"),
    runSequence = require("run-sequence"),
    webpack = require("webpack");

gulp.task("test:dev", function (done)
{
    new Server({
        configFile: __dirname + "/karma.conf.js"
    }, done).start();
});

gulp.task("test:ci", function (done)
{
    new Server({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done).start();
});

gulp.task("ci", ["test:ci"], function ()
{
    return gulp.src(".build/coverage/lcov/lcov.info")
        .pipe(coveralls());
});

gulp.task("default", ["test:dev"]);

gulp.task("babel", function ()
{
    return gulp.src("src/mQuery.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task("lint", function ()
{
    return gulp.src(["src/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task("webpack", function (callback)
{
    webpack(require("./webpack.config.js"), function (err, stats)
    {
        if (err)
        {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            // output options
        }));

        callback();
    });
});

gulp.task("build", function (callback)
{
    runSequence(
        "lint", "test:ci", "webpack", callback
    );
});

