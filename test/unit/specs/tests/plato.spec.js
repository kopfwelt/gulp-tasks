/* eslint no-unused-expressions: 0 */

const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;

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

const platoTask = require('../../../../tasks/tests/plato');

const outpath = path.join(__dirname, '../../.tmp');

describe('gulp tasks scripts', () => {
	describe('plato', done => {

		it('should generate a plato report for javascritp source files', done => {
			// gulp.start('plato');
			platoTask(() => {
				console.log('done');
				done();
			});
		});
	});
});
