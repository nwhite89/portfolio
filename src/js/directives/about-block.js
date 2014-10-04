angular
    .module('app.directives')
    .directive('aboutBlock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/about.tmpl.html',
            'controller': 'aboutCtrl'
        };
    });
