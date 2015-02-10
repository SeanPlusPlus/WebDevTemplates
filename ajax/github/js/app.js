'use strict';

var hello = angular.module('hello', ['hello.controllers', 'hello.services']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'helloService', function ($scope, helloService) {

    // hello msg
    var hello_msg = 'Hitting the GitHub API';
    $scope.hello_msg = hello_msg;

    // AJAX call
    var request = {'method': 'get', 'resource': 'users/seanplusplus'};
    helloService.async(request).then(function(response) {
      $scope.user = response.data;
    });
  }]);
