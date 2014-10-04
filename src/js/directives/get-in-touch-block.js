angular
    .module('app.directives')
    .directive('getInTouchBlock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/get-in-touch.tmpl.html'
        };
    });
