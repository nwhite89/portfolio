angular
    .module('app.controllers')
    .controller('footer', function ($scope) {
        var date = new Date();
        $scope.year = date.getFullYear();
    });
