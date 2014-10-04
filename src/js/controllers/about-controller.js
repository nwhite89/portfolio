angular
    .module('app.controllers')
    .controller('aboutCtrl', function ($scope, instagramResource) {
        $scope.instagram = instagramResource.query();
    });
