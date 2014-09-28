module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            bootstrap: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/',
                        src: ['**'],
                        dest: 'bootstrap/',
                        isFile: true
                    }
                ]
            },

            jquery: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['**'],
                        dest: 'jquery/',
                        isFile: true
                    }
                ]
            },
            jqueryui: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/jquery-ui/',
                        src: ['*.js'],
                        dest: 'jqueryui/',
                        isFile: true
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery-ui/themes/',
                        src: ['smoothness/**'],
                        dest: 'jqueryui/'
                    }
                ]
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'css/*.css'
            },
            html: {
                files: 'html/*.html'
            }
        },
        connect: {
            server: {
                options: {
                port: 22222,
                hostname: 'localhost'
               }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['copy', 'connect', 'watch']);

};