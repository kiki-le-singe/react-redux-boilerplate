// https://www.npmjs.com/package/gulp-load-plugins
// https://github.com/stevemao/gulp-conventional-changelog

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config').conventionalChangelog;

gulp.task('changelog', () => (
  gulp.src(config.src, {
    buffer: false,
  })
  .pipe($.conventionalChangelog({
    preset: config.src,
  }))
  .pipe(gulp.dest(config.dest))
));
