'use strict';

var hello = angular.module('hello', ['hello.controllers', 'hello.services']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'helloService', '$q', '$routeParams', function ($scope, helloService, $q, $routeParams) {

    // hello msg
    var hello_msg = 'Hitting the GitHub API';
    $scope.hello_msg = hello_msg;

    // build list of AJAX requests
    var requests = [
      helloService.async({'method': 'get', 'resource': 'users/seanplusplus'})
    ];

    // $q lets us make multiple AJAX calls
    $q.all(requests).then(function(responses) {
      $scope.user = responses[0].data;
    });

    // debug
    if ('debug' in $routeParams) {
      $scope.debug = true;
    }
  }]);
