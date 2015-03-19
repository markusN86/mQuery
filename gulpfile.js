var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

gulp.task("uglify", function()
{
    gulp.src("mQuery.js")
        .pipe(uglify())
        .pipe(rename("mQuery.min.js"))
        .pipe(gulp.dest("."))
});

gulp.task("live-uglify", function ()
{
    gulp.watch("mQuery.js", ["uglify"]);
});