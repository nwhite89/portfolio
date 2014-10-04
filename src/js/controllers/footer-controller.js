angular
    .module('app.controllers')
    .controller('footerCtrl', function ($scope) {
        var date = new Date();
        $scope.year = date.getFullYear();
    });
