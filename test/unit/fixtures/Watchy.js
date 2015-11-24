/* global guid */

const path = require('path');

/**
 * Simulates filechanges to us gulp.watch
 */
class Watchy {
	constructor(options) {
		const uuid = guid();
		this._filename = path.join(__dirname, options.path, uuid, '.txt');
	}
	create() {
		// create temporary file
	}

	change() {
		// change file date
	}

	clean() {
		// remove the file
	}
}

module.exports = Watchy;
