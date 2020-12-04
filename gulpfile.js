const {src, dest, series, parallel} = require('gulp');

const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
}

function styleTask() {
  return src('src/styles/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('dist/css'))
}

function scriptTask() {
  return src('src/scripts/*.js')
    .pipe(dest('dist/js'))
}

function imageTask() {
  return src('src/images/*jpg')
    .pipe(imagemin())
    .pipe(dest('dist/img'))
}

exports.images = imageTask;

exports.default = series(htmlTask, imageTask, styleTask, scriptTask);