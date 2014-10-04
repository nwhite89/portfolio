angular
    .module('app.controllers')
    .controller('portfolio', function ($scope, $sce, projectResource, lodash) {
        $scope.portfolio = true;
        $scope.project = false;

        $scope.projects = {};
        projectResource.query(function (response) {
            $scope.projects = response;
        });

        $scope.showPortfolio = function (pid) {
            $scope.portfolio = false;
            $scope.project = true;

            $scope.showProject = _.findWhere($scope.projects, {
                id: pid
            });

            $scope.projectText = $sce.trustAsHtml($scope.showProject.text);
        };
    });
