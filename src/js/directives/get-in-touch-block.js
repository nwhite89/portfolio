angular
    .module('app.directives')
    .directive('getintouchblock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/get-in-touch.tmpl.html'
        };
    });
