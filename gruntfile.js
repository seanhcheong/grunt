module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 
		uglify: {
  			options: {
    			banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  			},
  			dist: {
    			files: {
      			'dist/<%= pkg.name %>.min.js': ['js/app.js']
    			}
  			}
		},
		jshint: {
  			files: ['gruntfile.js', 'js/app.js', 'js/*.js'], 			
  			options: {     		
    			globals: {
      				jQuery: true,
      				console: true,
      				module: true
    			}
  			}
		},
		cssmin: {
  			minify: {
    			expand: true,
    			src: ['css/main.css'],
    			dest: 'dist/',
    			ext: '.min.css'
  			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jshint', 'cssmin', 'uglify']);
};