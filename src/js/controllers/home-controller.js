angular
    .module('app.controllers')
    .controller('homeCtrl', function ($scope, workingOnResource) {
        $scope.workingAt = {
            'title': 'Rockabox Ltd.',
            'text': '@rockabox',
            'link': 'http://rockabox.com'
        };

        $scope.workingWith =  workingOnResource.query();
    });
