angular
    .module('app.controllers')
    .controller('aboutCtrl', function ($scope, instagramResource) {
        $scope.instagram = {};

        instagramResource.query(function (res) {
            $scope.instagram = res;
        });
    });
