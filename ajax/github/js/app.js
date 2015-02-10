'use strict';

var hello = angular.module('hello', ['hello.controllers', 'hello.services']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'helloService', '$q', function ($scope, helloService, $q) {

    // hello msg
    var hello_msg = 'Hitting the GitHub API';
    $scope.hello_msg = hello_msg;

    // build list of AJAX requests
    var requests = [
      helloService.async({'method': 'get', 'resource': 'users/seanplusplus'})
    ];

    // $q lets us make multiple AJAX calls
    $q.all(requests).then(function(response) {
      $scope.user = response[0].data;
    });
  }]);
