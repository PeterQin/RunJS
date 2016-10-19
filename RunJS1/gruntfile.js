module.exports = function(grunt){

	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    watch: {
	      ejs: {
	      	files: ['views/**'],
	      	options: {livereload: true}
	      },

	      js: {
	      	files: ['public/javascript/**', 'business/**'],
	      	//tasks: ['jshint'],
	        options: {livereload: true},
	      },
	      css: {
	      	files: ['public/stylesheets/**'],
	        options: {livereload: true}
	      }
	    },

	    nodemon: {
	    	dev: {
	    		options: {
	    			file: 'app.js',
	    			args: [],
	    			ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
	    			watchedExtensions: ['js'],
	    			watchedFolders: ['app', 'config'],
	    			debug: true,
	    			delayTime: 1,
	    			env: {PORT: 3000},
	    			cwd: __dirname
	    		}
	    	}
	    },

	    concurrent: {
	    	tasks: ['nodemon', 'watch'],
	    	options: {logConcurrentOutput: true}
	    }

	  });

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.option('force', true);
	grunt.registerTask('default', ['concurrent'])
}