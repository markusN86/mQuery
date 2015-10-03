var gulp = require("gulp"),
    uglify = require("gulp-uglifyjs"),
    jshint = require("gulp-jshint"),
    jscs = require("gulp-jscs"),
    Server = require("karma").Server,
    glob = ["*.js", "tests/*.js", "!*.min.js"],
    coveralls = require("gulp-coveralls");

gulp.task("uglify", ["jshint", "jscs"], function ()
{
    return gulp.src("mQuery.js")
        .pipe(uglify("mQuery.min.js", {
            outSourceMap: true
        }))
        .pipe(gulp.dest("."));
});

gulp.task("jshint", function ()
{
    return gulp.src(glob)
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"))
        .pipe(jshint.reporter("fail"));
});

gulp.task("jscs", function ()
{
    return gulp.src(glob)
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter("fail"));
});

gulp.task("test", ["uglify"], function (done)
{
    new Server({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done).start();
});

gulp.task("coveralls", ["test"], function ()
{
    return gulp.src(".build/coverage/lcov/lcov.info")
        .pipe(coveralls());
});

gulp.task("default", function ()
{
    return gulp.watch(glob, ["test"]);
});
