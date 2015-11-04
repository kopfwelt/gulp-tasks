
import gulp from 'gulp'
import notify from 'gulp-notify'
import hb from 'gulp-hb'
import rename from 'gulp-rename'

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
			extname: ".html"
		}))
		.pipe(gulp.dest('examples'))
})