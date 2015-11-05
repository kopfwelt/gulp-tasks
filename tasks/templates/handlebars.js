const gulp = require('gulp');
const notify = require('gulp-notify');
const hb = require('gulp-hb');
const rename = require('gulp-rename');

gulp.task('handlebars', () => {
	return gulp.src('src/templates/index.hbs')
		.pipe(hb({
			// helpers: 'app/templates/helpers/*.js',
			partials: [
				'src/templates/*.hbs'
			],
			bustCache: true
		}))
		.on('error', notify.onError(error => `Handlebars error: ${error}`))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('examples'));
});
