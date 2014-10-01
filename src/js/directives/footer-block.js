angular
    .module('app.directives')
    .directive('footerblock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'templates/footer.tmpl.html'
        };
    });
