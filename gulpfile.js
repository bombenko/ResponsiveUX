var gulp = require("gulp"),
less = require("gulp-less"),

devDist = "dev/",
releaseDist = "release/";

gulp.task("less", function(){
    gulp.src(devDist + "css/style.less")
    .pipe(less())
    .pipe(gulp.dest(devDist + "css/"));
})

gulp.task('default', function() {
    gulp.run('less');
    gulp.watch('dev/css/**', function(event) {
        gulp.run('less');
    });
})
