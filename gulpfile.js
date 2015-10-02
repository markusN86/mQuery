var gulp = require("gulp"),
    uglify = require("gulp-uglifyjs"),
    jshint = require("gulp-jshint"),
    jscs = require("gulp-jscs"),
    karma = require("gulp-karma"),
    karmaConf = require("./karma.conf"),
    conf = {
        set: function (o)
        {
            this.config = o;
        }
    };

karmaConf(conf);

gulp.task("uglify", function ()
{
    return gulp.src("mQuery.js")
        .pipe(uglify("mQuery.min.js", {
            outSourceMap: true
        }))
        .pipe(gulp.dest("."));
});

gulp.task("jshint", function ()
{
    return gulp.src("**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"))
        .pipe(jshint.reporter("fail"));
});

gulp.task("jscs", function ()
{
    return gulp.src("**/*.js")
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter("fail"));
});

gulp.task("default", function ()
{
    return gulp.watch(["**/*.js", "!**/*.min.js"], [
        "jshint",
        "jscs",
        "uglify",
        "karma"
    ]);
});

gulp.task("karma", function ()
{
    return gulp.src(conf.config.files)
        .pipe(karma({
            configFile: "karma.conf.js",
            action: "run"
        }));
});
