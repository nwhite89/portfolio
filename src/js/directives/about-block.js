angular
    .module('app.directives')
    .directive('about-block', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/about.tmpl.html'
        };
    });
