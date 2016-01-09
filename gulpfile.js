var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    jshint = require('gulp-jshint');

gulp.task('scss', function () {
    return gulp.src('scss/selectus.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename('selectus.min.css'))
        .pipe(gulp.dest('src'));
});

gulp.task('js', function () {
    return gulp.src([
        'js/jquery.selectus.js',
    ])
        .pipe(jshint())
        .pipe(concat('selectus.min.js'))
        .pipe(gulp.dest('src'))
});

gulp.task('default', ['scss', 'js']);

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['scss']);
    gulp.watch('js/*.js', ['js']);
});