angular
    .module('app.directives')
    .directive('portfolio-block', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'templates/portfolio.tmpl.html'
        };
    });
