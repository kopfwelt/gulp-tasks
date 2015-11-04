
import gulp from 'gulp';
import webdriver from 'gulp-webdriver';
import path from 'path';

gulp.task('webdriverio', ['webdriverio:sauce'])

gulp.task('webdriverio:local', function() {
    return gulp.src('./tests/functional/wdio.local.conf.js', {read: false})
        .pipe(webdriver({
        	// for npm 3+
            wdioBin:  path.join('./', 'node_modules', '.bin', 'wdio')
        }));
});
gulp.task('webdriverio:sauce', function() {
    return gulp.src('./tests/functional/wdio.sauce.conf.js', {read: false})
        .pipe(webdriver({
        	// for npm 3+
            wdioBin:  path.join('./', 'node_modules', '.bin', 'wdio')
        }));
});