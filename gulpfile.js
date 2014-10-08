var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    size = require('gulp-filesize'),
    gutil = require('gulp-util');

var onerror = function(err) {
    if (err) gutil.log(gutil.colors.magenta('!! Error'), ':', gutil.colors.cyan(err.plugin), '-', gutil.colors.red(err.message));
};

gulp.task('scripts', function() {
    gulp.src(['./src/scripts/app.js'])
        .pipe(browserify({
            shim: {
                underscore : {
                    path: './src/scripts/lib/underscore.js',
                    exports: '_'
                }
            }
        }))
        .on('error', onerror)
        .pipe(concat('prod.js'))
        .pipe(gulp.dest('./public/dist'))
        .pipe(size())
        .pipe(concat('prod.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist'))
        .pipe(size());
});

gulp.task('styles', function() {
    gulp.src(['./src/scss/**/*.scss'])
        .pipe(sass())
        .on('error', onerror)
        .pipe(prefix("last 3 version", "> 1%", "ie 9"))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/css'))
        .pipe(size());
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**', ['styles']);
    gulp.watch('src/scripts/**', ['scripts']);
});

gulp.task('default', function() {
    gulp.start('watch');
});