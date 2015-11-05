
const gulp = require('gulp');
const webdriver = require('gulp-webdriver');
const path = require('path');

gulp.task('webdriverio', ['webdriverio:sauce']);

gulp.task('webdriverio:local', () => {
	return gulp.src('./tests/functional/wdio.local.conf.js', {read: false})
		.pipe(webdriver({
			// for npm 3+
			wdioBin: path.join('./', 'node_modules', '.bin', 'wdio')
		}));
});

gulp.task('webdriverio:sauce', () => {
	return gulp.src('./tests/functional/wdio.sauce.conf.js', {read: false})
		.pipe(webdriver({
			// for npm 3+
			wdioBin: path.join('./', 'node_modules', '.bin', 'wdio')
		}));
});
