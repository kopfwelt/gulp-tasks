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
const expexted = path.join(__dirname, '../../', 'expexted/templates/handlebars/');

const config = require(`${global.__configpath}config`);

require('../../../../tasks/templates/handlebars');

const outpath = path.join(__dirname, '../../.tmp');

/**
 * handlebars test
 * @todo Add test for i18next
 * @todo Add test for layouts
 */
describe('gulp tasks templates', () => {
	before(rimraf.bind(null, outpath));
	before(mkdirp.bind(null, outpath));
	after(rimraf.bind(null, outpath));

	describe('handlebars', () => {
		it('should be registered as gulp task', () => {
			expect(gulp.tasks.handlebars).to.be.an('object');
		});

		it('should compile templates to html', done => {
			gulp.start('handlebars')
				.on('stop', () => {
					const compiledFilePath = path.join(config.tasks.templates.handlebars.dest, 'test.html');
					expect(compiledFilePath).to.exist;

					const expectedPath = path.join(expexted, 'test.html');
					const expectedContent = fs.readFileSync(expectedPath, 'utf8');
					const compiledContent = fs.readFileSync(compiledFilePath, 'utf8');
					expect(compiledContent).to.equal(expectedContent, 'File content should be the same as the test file');

					done();
				});
		});
	});
});
