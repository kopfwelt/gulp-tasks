// Karma configuration
// Generated on %DATE%

// var By = require('selenium-webdriver').By,
//     until = require('selenium-webdriver').until,
//     firefox = require('selenium-webdriver/firefox');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha', 'chai-sinon'],


    // list of files / patterns to load in the browser
    files: [
      './tests/unit/tests/*.js'
    ],


    // list of files to exclude
    exclude: [
      ''
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './tests/unit/tests/*.js': [ 'browserify' ],
      '../../src/scripts/moin.js': [ 'coverage' ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // define browsers 
    // customLaunchers: {
    //   swd_firefox: {
    //     base: 'SeleniumWebdriver',
    //     browserName: 'Firefox',
    //     getDriver: function() {
    //       // example from https://www.npmjs.com/package/selenium-webdriver#usage 
    //       var driver = new firefox.Driver();
    //       return driver;
    //     }
    //   },
    // },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome', 'Opera', 'Safari', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    browserify: {
      debug: true,
      // transform: [ 'brfs' ],
      configure: function(bundle) {
        bundle.once('prebundle', function() {
          bundle.transform('babelify');
        });
      }
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }

  })
}
