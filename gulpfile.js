const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('default', function() {
  // node source
  gulp.src('js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist')) // save
  // public source
  gulp.src('public/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'))
})
