var gulp = require("gulp"),
    babel = require("gulp-babel");
    Server = require("karma").Server,
    glob = ["*.js", "tests/*.js", "!*.min.js"],
    coveralls = require("gulp-coveralls");

gulp.task("test", function (done)
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

gulp.task("babel", function () {
    return gulp.src("src/mQuery.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});
