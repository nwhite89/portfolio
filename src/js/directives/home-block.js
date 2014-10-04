angular
    .module('app.directives')
    .directive('homeBlock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/home.tmpl.html'
        };
    });
