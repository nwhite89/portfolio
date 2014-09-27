angular
    .module('app.directives')
    .directive('about-block', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'templates/about.tmpl.html'
        };
    });
