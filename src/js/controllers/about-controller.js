angular
    .module('app.controllers')
    .controller('about', function ($scope, instagramResource) {
        $scope.instagram = {};

        instagramResource.query(function (res) {
            $scope.instagram = res;
        });
    });
