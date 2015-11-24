const config = require(process.env.GULP_CONFIG);
const gulp = require('gulp');
const path = require('path');
const watch = require('gulp-watch');

const watchTask = () => {
	// const watchableTasks = ['fonts', 'iconFont', 'images', 'svgSprite','html', 'css'];

	// watchableTasks.forEach(function(taskName) {
	//   const task = config.tasks[taskName];
	//   if(task) {
	//     const glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
	//     watch(glob, function() {
	//      require('./' + taskName)();
	//     });
	//   }
	// });
	const glob = path.join(config.root.src, '**/*.{js,html,xml}');
	watch(glob);
};

gulp.task('watch', ['browserSync'], watchTask);
module.exports = watchTask;
