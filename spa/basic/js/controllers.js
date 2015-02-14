'use strict';

angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'helloService', function ($scope, helloService) {

    // hello msg
    var hello_msg = 'Basic Single Page App';
    $scope.hello_msg = hello_msg;

    // AJAX call
    var request = {'method': 'get', 'resource': 'awesome.json'};
    helloService.async(request).then(function(response) {
      $scope.awesome_things = response.data;
    });
  }]);
