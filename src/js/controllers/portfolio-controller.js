angular
    .module('app.controllers')
    .controller('portfolioCtrl', function ($scope, $sce, projectResource, lodash) {
        $scope.portfolio = true;
        $scope.projects = {};

        projectResource.query(function (response) {
            $scope.projects = response;
        });

        $scope.showPortfolio = function (pid) {
            $scope.portfolio = false;

            $scope.showProject = lodash.findWhere($scope.projects, {
                id: pid
            });

            $scope.projectText = $sce.trustAsHtml($scope.showProject.text);
        };

        $scope.close = function () {
            $scope.portfolio = true;
        };
    });
