angular
    .module('app.directives')
    .directive('getintouchblock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'templates/get-in-touch.tmpl.html'
        };
    });
