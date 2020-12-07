const {src, dest, series, parallel} = require('gulp');

const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const cssnano = require('gulp-cssnano');

function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
};

function styleTask() {
  return src('src/styles/*.css')
    .pipe(concat('all.css'))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
};

function scriptTask() {
  return src('src/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
}

function imageTask() {
  return src('src/images/*jpg')
    .pipe(imagemin())
    .pipe(dest('dist/img'))
}

exports.images = imageTask;

exports.default = series(htmlTask, imageTask, styleTask, scriptTask);