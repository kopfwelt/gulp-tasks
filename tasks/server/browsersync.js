const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require(`${__configpath}config`);

const browserSyncTask = () => {
	browserSync.init(config.tasks.browserSync);
};

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
