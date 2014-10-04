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
            },
            templates: {
                src: 'src/templates/**/*.tmpl.html',
                dest: 'www/tmpl/',
                flatten: true,
                expand: true
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
                '**/*.js',
                '!node_modules/**'
            ],
            json: [
                '**/*.json',
                '!node_modules/**'
            ]
        },
        sass: {
            dist: {
                files: {
                    'main.css': 'main.scss'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Set's up linting task
    grunt.registerTask('lint', [
        'jshint:src',
        'jshint:json',
        'jscs:src'
    ]);

    grunt.registerTask('build', [
        'copy:html',
        'copy:api',
        'copy:templates',
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
