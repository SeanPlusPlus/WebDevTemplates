'use strict';

var hello = angular.module('hello', ['hello.controllers', 'hello.services']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'helloService', function ($scope, helloService) {

    // hello msg
    var hello_msg = 'Some Awesome Things (via AJAX)';
    $scope.hello_msg = hello_msg;

    // AJAX call
    var request = {'method': 'get', 'resource': 'awesome.json'};
    helloService.async(request).then(function(response) {
      $scope.awesome_things = response.data;
    });
  }]);
