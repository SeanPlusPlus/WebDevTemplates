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

    // loop over awesome things and add exclamation pt!
    angular.forEach(awesome_things, function(awesome_thing) {
      awesome_thing.name += '!';
    });
    $scope.awesome_things = awesome_things;
  }]);
