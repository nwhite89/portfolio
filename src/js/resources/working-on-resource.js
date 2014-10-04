angular
    .module('app.resources')
    .factory('workingOnResource', function ($resource) {
        return $resource('api/working-on.json', {});
    });
