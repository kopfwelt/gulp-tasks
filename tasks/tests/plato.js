/* global __configpath */

const gulp = require('gulp');
const plato = require('plato');
const path = require('path');

const config = require(`${__configpath}config`);

const paths = {
	src: path.join(config.root.src, config.tasks.scripts.src),
	dest: path.join(config.root.dest, config.tasks.scripts.dest)
};

const taskPlato = cb => {
	const files = paths.src;

	const outputDir = './output/dir';
	console.log(paths.src);
	console.log(outputDir);

	// null options for this example
	const options = {
		title: 'Your title here'
	};

	const callback = () => {
		// once done the analysis,
		// execute this
		cb();
	};

	plato.inspect(files, outputDir, options, callback);
};

gulp.task('plato', taskPlato);

module.exports = taskPlato;
