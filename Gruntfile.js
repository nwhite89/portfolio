module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
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
        'copy:html'
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
