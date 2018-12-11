module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // configuration des tâches grunt


    watch: {
           files: 'public/stylesheets/*.css',
           tasks: ['styles']
       },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'public/**/*.css',
            'views/*.ejs',
          ]
        },
        options: {
          watchTask: true,
          proxy: 'localhost:3000',
	  browser: 'firefox'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      single_file: {
        src: 'public/stylesheets/build/purify.css',
        dest: 'public/stylesheets/build/style.css'
      },
    },
    purifycss: {
      options: {},
      target: {
        src: ['views/**/*.ejs', 'public/js/*.js'],
        css: ['public/stylesheets/build/style_concat.css'],
        dest: 'public/stylesheets/build/purify.css'
      }
    },
    uglify: {
      build: {
        src: 'public/js/index.js',
        dest: 'public/js/index.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/stylesheets/build/',
          src: ['style.css'],
          dest: 'public/stylesheets/build/',
          ext: '.min.css'
        }]
      }
    },
    concat_css: {
    options: {
      // Task-specific options go here.
    },
    all: {
      src: ["public/stylesheets/*.css"],
      dest: "public/stylesheets/build/style_concat.css"
    },
  },
  imagemin: {

        dynamic: {
          options: {
              optimizationLevel: 3,
              svgoPlugins: [{removeViewBox: false}]
          },
            files: [{
                expand: true,
                cwd: 'public/images/src/',
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: 'public/images/'
            }]
        }
    }
  });

  //Les taches dépendantes sont chargées ici
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Les tâches sont enregistrées ici
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('styles', ['concat_css','purifycss', 'autoprefixer', 'cssmin']);
  grunt.registerTask('images', ['imagemin']);
};
