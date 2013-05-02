"use strict"

module.exports = (grunt) ->
	# Project configuration.
	grunt.initConfig
		connect:
			livereload:
				options:
					port: 9001

		regarde:
			html:
				files: "**/*.html"
				tasks: ["livereload"]

	grunt.loadNpmTasks "grunt-regarde"
	grunt.loadNpmTasks "grunt-contrib-connect"
	grunt.loadNpmTasks "grunt-contrib-livereload"
	grunt.registerTask "default", ["livereload-start", "connect", "regarde"]