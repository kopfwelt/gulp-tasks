/* global __configpath */

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nestedcss = require('postcss-nested');
const rename = require('gulp-rename');

const config = require(`${__configpath}config`);

gulp.task('postcss', () => {
	const processors = [
		autoprefixer({browsers: ['last 1 version']}),
		nestedcss
	];
	return gulp.src(config.tasks.styles.postcss.src)
		.pipe(postcss(processors))
		.pipe(rename({
			extname: '.css'
		}))
		.pipe(gulp.dest(config.tasks.styles.postcss.dest));
});
