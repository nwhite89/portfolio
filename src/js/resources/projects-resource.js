angular
    .module('app.resources')
    .factory('projectResource', function ($resource) {
        return $resource('api/projects.json', {});
    });
