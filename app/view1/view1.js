'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['jsonService', 'parseService', '$scope',
  function(jsonService, parseService, $scope) {

  //this can be refactored into a service
  // $scope.posts = postService.separatePosts(json.data); should return an object with the 4 attrs

  // $scope.topPosts = [];
  // $scope.otherPosts = [];
  // $scope.summaryPosts = [];
  // $scope.dailyPost = {};
  jsonService.get().then(function(json) {
    // $scope.data = json.data;
    $scope.posts = parseService.parsePosts(json.data);
    $scope.posts.dailyPosts = parseService.parseObjToArray($scope.posts.dailyPost)
    // $scope.data.forEach(function(post) {
    //   if (parseInt(post.comments) > 9 && parseInt(post.views) > 9000 &&
    //     post.title.length < 40 && post.privacy == "public") {
    //       console.log(post);
    //     $scope.topPosts.push(post);
    //   } else {
    //     $scope.otherPosts.push(post);
    //   }
    //
    //   $scope.summaryPosts.push(post.id)
    // })
  })




}]);
