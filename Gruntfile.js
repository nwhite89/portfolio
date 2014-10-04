module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        concat: {
            dev: {
                src: [
                    'vendor/angular/angular.js',
                    'vendor/angular-resource/angular-resource.js',
                    'vendor/angular-sanitize/angular-sanitize.js',
                    'vendor/ng-lodash/build/ng-lodash.js',
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
            src: '<%= jshint.src %>'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                '**/*.js',
                '!vendor/**',
                '!node_modules/**',
                '!www/**'
            ],
            json: [
                '**/*.json',
                '!vendor/**',
                '!node_modules/**'
            ]
        },
        sass: {
            options: {
                includePaths: [
                    'vendor/bootstrap-sass-official/assets/stylesheets'
                ].concat(require('node-bourbon').includePaths)
            },
            dist: {
                files: {
                    'www/main.css': 'src/sass/template.scss'
                }
            }
        },
        watch: {
            dev: {
                files: [
                    'src/**/*.js',
                    'src/**/*.scss',
                    'src/**/*.html'
                ],
                tasks: [
                    'build'
                ],
                options: {
                    livereload: true
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
        'concat:dev',
        'sass:dist'
    ]);

    grunt.registerTask('serve', [
        'build',
        'connect:server'
    ]);

    grunt.registerTask('dev', [
        'serve',
        'watch'
    ]);

    // Test task, to run tests for the project
    grunt.registerTask('test', ['lint']);

    // Grunt default taske (run linting first then set up serve)
    grunt.registerTask('default', [
        'lint',
        'dev'
    ]);
};
