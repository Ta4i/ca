module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },
        bower_concat: {
            libs: {
                dest: 'build/libs.js'
            }
        },
        watch: {
            files: ['sources/scss/*.scss'],
            tasks: [
                'sass'
            ]
        },
        sass: {
            dist: {
                files: {
                    'build/main.css': 'sources/scss/main.scss'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/libs.min.js': ['build/libs.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', [
        'bower_concat:libs',
        'uglify:my_target',
        'sass',
        'watch'
    ]);
};