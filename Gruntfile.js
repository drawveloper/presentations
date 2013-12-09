/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					hostname: '*',
					port: port,
					base: '.'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			main: {
				files: [ 'css/main.css', '**/*.html' ]
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Default task
	grunt.registerTask( 'default', [ 'connect', 'watch' ] );
};
