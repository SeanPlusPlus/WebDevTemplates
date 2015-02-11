'use strict';

var hello = angular.module('hello', ['hello.controllers', 'hello.services']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'helloService', '$q', '$location', function ($scope, helloService, $q, $location) {

    // hello msg
    var hello_msg = 'Hitting the GitHub API';
    $scope.hello_msg = hello_msg;

    // build list of AJAX requests
    var requests = [
      helloService.async({'symbol': 'dis'})
    ];

    // $q lets us make multiple AJAX calls
    $q.all(requests).then(function(responses) {
      $scope.dis = responses[0].data;
    });

    // debug, ex path would be: WebDevTemplates/ajax/github/#?debug
    var params = $location.search();
    if ('debug' in params) {
      $scope.debug = true;
    }
  }]);
