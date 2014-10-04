// Setup project
angular
    .module('app.directives')
    .directive('nav-block', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl':  'tmpl/nav.tmpl.html'
        };
    });
