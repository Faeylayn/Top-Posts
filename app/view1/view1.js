'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['jsonService', '$scope', function(jsonService, $scope) {
  jsonService.get().then(function(json) {
    console.log(json);
    $scope.data = json.data;
    $scope.topPosts = [];
    $scope.otherPosts = [];
    $scope.summaryPosts = [];
    $scope.data.forEach(function(post) {
      if (parseInt(post.comments) > 9 && parseInt(post.views) > 9000 && 
        post.title.length < 40 && post.privacy == "public") {
        $scope.topPosts.push(post);
      } else {
        $scope.otherPosts.push(post);
      }
    })
  })



}]);
