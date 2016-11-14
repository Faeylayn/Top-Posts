'use strict';

angular.module('myApp.jsonService', []).factory('jsonService', function($http) {
    var promise;
    var jsondata = {
        get: function() {
            if ( !promise ) {
                var promise =  $http.get('./posts.json').success(function(response) {
                    return response.data;
                });
                return promise;
            }
        }
    };
    return jsondata;
});
