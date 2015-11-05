const gulp = require('gulp');

gulp.task('tests', ['test:xo', 'test:unit', 'test:functional']);
gulp.task('test:unit', ['karma']);
gulp.task('test:functional', ['webdriverio']);
gulp.task('test:lint', ['xo']);
