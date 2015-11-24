/* eslint no-unused-expressions: 0 */

const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const before = mocha.before;
const after = mocha.after;

const chai = require('chai');
const expect = chai.expect;

const gulp = require('gulp');

const fs = require('graceful-fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const path = require('path');

global.__configpath = path.join(__dirname, '../../', 'fixtures/');
const expexted = path.join(__dirname, '../../', 'expexted/styles/postcss/');

const config = require(`${global.__configpath}config`);

require('../../../../tasks/styles/postcss');

const outpath = path.join(__dirname, '../../.tmp');

describe('gulp tasks styles', () => {
	before(rimraf.bind(null, outpath));
	before(mkdirp.bind(null, outpath));
	after(rimraf.bind(null, outpath));

	describe('postcss', () => {
		it('should be registered as gulp task', () => {
			expect(gulp.tasks.postcss).to.be.an('object');
		});

		it('should compile scss to css', done => {
			gulp.start('postcss')
				.on('stop', () => {
					const compiledFilePath = path.join(config.tasks.styles.postcss.dest, 'test.css');
					expect(compiledFilePath).to.exist;

					const expectedPath = path.join(expexted, 'test.css');
					const expectedContent = fs.readFileSync(expectedPath, 'utf8');
					const compiledContent = fs.readFileSync(compiledFilePath, 'utf8');
					expect(compiledContent).to.equal(expectedContent, 'File content should be the same as the test file');
					console.log('stop');
					done();
				});
		});
	});
});
