angular
    .module('app.directives')
    .directive('home-block', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/home.tmpl.html'
        };
    });
