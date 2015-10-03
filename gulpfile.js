var gulp = require("gulp"),
    uglify = require("gulp-uglifyjs"),
    jshint = require("gulp-jshint"),
    jscs = require("gulp-jscs"),
    karma = require("gulp-karma"),
    karmaConf = require("./karma.conf"),
    karmaConfig = {
        set: function (o)
        {
            this.config = o;
        }
    },
    glob = ["*.js", "tests/*.js", "!*.min.js"],
    coveralls = require("gulp-coveralls");

karmaConf(karmaConfig);

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

gulp.task("test", ["uglify"], function ()
{
    return gulp.src(karmaConfig.config.files)
        .pipe(karma({
            configFile: "karma.conf.js",
            action: "run"
        }));
});

gulp.task("coveralls", ["test"], function ()
{
    return gulp.src(".build/coverage/lcov.info")
        .pipe(coveralls());
});

gulp.task("default", function ()
{
    return gulp.watch(glob, ["test"]);
});
