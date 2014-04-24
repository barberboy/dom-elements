var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');

gulp.task('default', function(){
  return gulp.src('src/index.js')
    .pipe(browserify({
      standalone : 'domElements'
    }))
    .pipe(rename('dom-elements.js'))
    .pipe(gulp.dest('lib/'))
    .pipe(uglify())
    .pipe(rename('dom-elements.min.js'))
    .pipe(gulp.dest('lib/'));
});

gulp.task('lint', function(){
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
