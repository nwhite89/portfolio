// Setup project
angular
    .module('app.directives')
    .directive('navBlock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl':  'tmpl/nav.tmpl.html'
        };
    });
