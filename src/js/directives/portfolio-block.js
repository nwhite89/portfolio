angular
    .module('app.directives')
    .directive('portfolio-block', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/portfolio.tmpl.html'
        };
    });
