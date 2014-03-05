module.exports = function (config) {
	config.set({
		basePath: '../',
		frameworks: ['jasmine'],
		files: [
			'app/bower_components/angular/angular.js',
		  'app/bower_components/**/*.js',
			'app/scripts/*.js',
			'app/scripts/controllers/*.js',
			'test/spec/controllers/*.js'
		],
		autoWatch: true,
		browsers: ['Chrome'],
		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	})
}
