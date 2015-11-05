const gulp = require('gulp');
const webpagetest = require('webpagetest');

gulp.task('test-perf', () => {
	const wpt = new webpagetest('www.webpagetest.org', 'APIKEY');
	const parameters = {
		disableHTTPHeaders: true,
		'private': true,
		video: true,
		location: 'Dulles:Chrome',
		login: 'admin',
		password: 'password'
	};
	const testSpecs = {
		runs: {
			1: {
				firstView: {
					SpeedIndex: 1500
				}
			}
		},
		median: {
			firstView: {
				bytesIn: 1000000,
				visualComplete: 4000
			}
		}
	};
	return wpt.runTest('http://someurl.com', parameters, function(err, data) {
		var checkStatus, testID;
		testID = data.data.testId;
		checkStatus = function() {
			return wpt.getTestStatus(testID, function(err, data) {
				console.log('Status for ' + testID + ': ' + data.data.statusText);
				if (!data.data.completeTime) {
					return setTimeout(checkStatus, 5000);
				} else {
					return wpt.getTestResults(testID, {
						specs: testSpecs
					}, function(err, data) {
						console.log('http://www.webpagetest.org/result/' + testID + '/');
						if (err > 0) {
							return process.exit(1);
						}
					});
				}
			});
		};
		return checkStatus();
	});
});