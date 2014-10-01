angular
    .module('app.directives')
    .directive('home-block', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'templates/home.tmpl.html'
        };
    });
