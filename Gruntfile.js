module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        concat: {
            dev: {
                src: [
                    'src/js/*.js',
                    'src/js/**/*-setup.js',
                    'src/**/*.js'
                ],
                dest: 'www/app.js'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'www'
                }
            }
        },
        copy: {
            html: {
                src: 'src/html/index.html',
                dest: 'www/index.html'
            },
            api: {
                expand: true,
                flatten: true,
                dest: 'www/api/',
                src: 'src/**/*.json'
            }
        },
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: [
                '**/*.js',
                '!node_modules/**'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                '**/*.json',
                '**/*.js',
                '!node_modules/**'
            ]
        }
    });

    require('load-grunt-tasks')(grunt);

    // Set's up linting task
    grunt.registerTask('lint', [
        'jshint:src',
        'jscs:src'
    ]);

    grunt.registerTask('build', [
        'copy:html',
        'copy:api',
        'concat:dev'
    ]);

    grunt.registerTask('serve', [
        'build',
        'connect:server:keepalive'
    ]);

    // Test task, to run tests for the project
    grunt.registerTask('test', ['lint']);

    // Grunt default taske (run linting first then set up serve)
    grunt.registerTask('default', [
        'lint',
        'serve'
    ]);
};
