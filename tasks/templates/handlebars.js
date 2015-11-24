/* global __configpath */

const gulp = require('gulp');
const notify = require('gulp-notify');
const hb = require('gulp-hb');
const layouts = require('handlebars-layouts');
const rename = require('gulp-rename');
const config = require(process.env.GULP_CONFIG);

const handlebarsTask = () => {
	// register layouts helper
	hb.handlebars.registerHelper(layouts(hb.handlebars));

	return gulp.src(config.tasks.templates.handlebars.src)
		.pipe(hb({
			helpers: config.tasks.templates.handlebars.helpers,
			// data: 'app/templates/data/**/*.{js,json}',
			partials: config.tasks.templates.handlebars.partials,
			bustCache: true
		}))
		.on('error', notify.onError(error => `Handlebars error: ${error}`))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest(config.tasks.templates.handlebars.dest));

};

gulp.task('handlebars', handlebarsTask);

module.exports = handlebarsTask;
