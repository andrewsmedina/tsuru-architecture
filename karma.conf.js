module.exports = function (config) {
	config.set({
		basePath: '../',
		frameworks: ['jasmine'],
		files: [
		  'app/bower_components/jquery/jquery.js',
			'app/bower_components/angular/angular.js',
		  'app/bower_components/**/*.js',
			'app/scripts/*.js',
			'app/scripts/controllers/*.js',
			'test/spec/controllers/*.js'
		],
		exclude: [
			'app/bower_components/jquery/build/*.js',
			'app/bower_components/jquery/speed/*.js',
			'app/bower_components/jquery/test/**/*.js',
			'app/bower_components/sass-bootstrap/js/tests/**/*.js',
			'app/bower_components/jquery/src/**/*.js',
			'app/bower_components/es5-shim/**/*.js'
		],
		autoWatch: true,
		browsers: ['Chrome'],
		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	})
}
