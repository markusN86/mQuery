var gulp = require("gulp");
var uglify = require("gulp-uglifyjs");

gulp.task("uglify", function()
{
    gulp.src("mQuery.js")
        .pipe(uglify("mQuery.min.js", {
            outSourceMap: "mQuery.js.map"
        }))
        .pipe(gulp.dest("."));
});

gulp.task("live-uglify", function ()
{
    gulp.watch("mQuery.js", ["uglify"]);
});