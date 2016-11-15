'use strict';

angular.module('myApp.parseService', []).factory('parseService', function($http) {
    return {
        parsePosts: function(data) {
          var parsed = {
            topPosts: [],
            otherPosts: [],
            summaryPosts: [],
            dailyPost: {}
          }
          data.forEach(function(post) {
            if (parseInt(post.comments) > 9 && parseInt(post.views) > 9000 &&
            post.title.length < 40 && post.privacy == "public") {
              parsed.topPosts.push(post);
            } else {
              parsed.otherPosts.push(post);
            }
            if (!parsed.dailyPost[post.timestamp.slice(0,10)] ||
            parsed.dailyPost[post.timestamp.slice(0,10)].likes < post.likes) {
              parsed.dailyPost[post.timestamp.slice(0,10)] = post;
            }

            parsed.summaryPosts.push(post.id)
          })
          return parsed;
        },
        parseObjToArray: function(obj) {
          var arr = []
          Object.keys(obj).forEach(function(key) {
            arr.push(obj[key]);
          })
          return arr
        }

    };
});
