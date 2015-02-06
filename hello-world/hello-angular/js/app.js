'use strict';

var hello = angular.module('hello', ['hello.controllers']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', function ($scope) {

    // hello msg
    var hello_msg = 'Some Awesome Things';
    $scope.hello_msg = hello_msg;

    // awesome_things
    var awesome_things = [
      {'name': 'California'},
      {'name': 'Backpacking'},
      {'name': 'Chess'}
    ];
    $scope.awesome_things = awesome_things;
    
  }]);
