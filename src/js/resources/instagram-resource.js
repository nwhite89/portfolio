angular
    .module('app.resources')
    .factory('instagramResource', function ($resource) {
        return $resource('api/instagram.json', {});
    });
