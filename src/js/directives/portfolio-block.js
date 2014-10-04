angular
    .module('app.directives')
    .directive('portfolioBlock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/portfolio.tmpl.html'
        };
    });
