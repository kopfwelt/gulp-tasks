const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const beforeEach = mocha.beforeEach;
const afterEach = mocha.afterEach;

const chai = require('chai');
const expect = chai.expect;

const gulp = require('gulp');

const fs = require('graceful-fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const path = require('path');

require('../../../../tasks/templates/handlebars');

const outpath = path.join(__dirname, '../../.tmp');

const tempFileContent = 'A test generated this file and it is safe to delete';

function createTempFile(path) {
	fs.writeFileSync(path, tempFileContent);
}

function updateTempFile(path) {
	const gazeTimeout = 125;
	setTimeout(() => {
		fs.appendFileSync(path, ' changed');
	}, gazeTimeout);
}

describe('handlebars gulp task', () => {
	beforeEach(rimraf.bind(null, outpath));
	beforeEach(mkdirp.bind(null, outpath));
	afterEach(rimraf.bind(null, outpath));

	it('should be registered as gulp tasks', () => {
		expect(gulp.tasks.handlebars).to.be.an('object');
	});

	it('should compile templates to html', done => {
		const tempFile = path.join(outpath, 'watch-func.txt');

		createTempFile(tempFile);

		gulp.task('test', cb => {
			// watcher.close();
			cb();
			done();
		});

		gulp.watch(tempFile, ['handlebars', 'test']);

		updateTempFile(tempFile);
	});

	it('should change postfix to .html', () => {
		// const testFile = path.join(__dirname, '../../out-fixtures/test.html');
		// expect(path.extname(testFile)).
		// console.log(fs.lstatSync(testFile));
		// expect(fs.existsSync(testFile)).to.be.true();
		// read directory an check for files
		// then check contents
	});
});
