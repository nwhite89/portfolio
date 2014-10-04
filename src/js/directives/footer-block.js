angular
    .module('app.directives')
    .directive('footerBlock', function () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/footer.tmpl.html',
            'controller': 'footerCtrl'
        };
    });
