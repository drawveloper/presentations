module.exports = (grunt) ->
  pkg = grunt.file.readJSON('package.json')
  verbose = grunt.option('verbose')
  open = "http://localhost:8000"
  port = grunt.option('port') || 8000
  base = grunt.option('base') || '.'

  config =
    less:
      main:
        files: [
          expand: true
          src: ['assets/**/*.less']
          dest: "."
          ext: '.css'
        ]

    connect:
      http:
        options:
          hostname: "*"
          open: open
          base: base
          livereload: true
          port: port

    watch:
      options:
        livereload: true
      less:
        options:
          livereload: false
        files: ['assets/**/*.less']
        tasks: ['less']
      css:
        files: ['assets/**/*.css']
      main:
        files: ['**/*.html']
      grunt:
        files: ['Gruntfile.coffee']

  tasks =
    # Building block tasks
    build: ['less']
    # Deploy tasks
    dist: ['build'] # Dist - minifies files
    # Development tasks
    default: ['build', 'connect', 'watch']
    devmin: ['build', 'min',
             'connect:http:keepalive'] # Minifies files and serve

  # Project configuration.
  grunt.initConfig config
  grunt.loadNpmTasks name for name of pkg.devDependencies when name[0..5] is 'grunt-'
  grunt.registerTask taskName, taskArray for taskName, taskArray of tasks
