/* global __configpath */

const gulp = require('gulp');
const notify = require('gulp-notify');
const hb = require('gulp-hb');
const layouts = require('handlebars-layouts');
const rename = require('gulp-rename');
const i18n = require('i18next');
const config = require(`${__configpath}config`);

gulp.task('handlebars', () => {
	// register i18n
	hb.handlebars.registerHelper('t', i18nKey => {
		const result = i18n.t(i18nKey);
		return new hb.handlebars.SafeString(result);
	});

	// register layouts helper
	hb.handlebars.registerHelper(layouts(hb.handlebars));

	return gulp.src(config.tasks.templates.handlebars.src)
		.pipe(hb({
			// helpers: 'app/templates/helpers/*.js',
			partials: config.tasks.templates.handlebars.partials,
			bustCache: true
		}))
		.on('error', notify.onError(error => `Handlebars error: ${error}`))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest(config.tasks.templates.handlebars.dest));
});
