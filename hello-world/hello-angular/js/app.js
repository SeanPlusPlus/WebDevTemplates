'use strict';

var hello = angular.module('hello', ['hello.controllers', 'hello.directives']);

// Controllers
///////////////////////////////////////////////////////////////////////////////
angular.module('hello.controllers', []).

  // Main Controller
  controller('MainCtrl', ['$scope', function ($scope) {
    var hello_msg = 'Some Awesome Things';
    $scope.hello_msg = hello_msg;
  }]).

  // Awesome Controller
  controller('AwesomeCtrl', ['$scope', function ($scope) {
    var awesome_things = [
      {"name":   "California"},
      {"name":   "Backpacking"},
      {"name":   "Chess"},
      {"name":   "Beer"},
      {"name":   "Bikes"},
      {"name":   "NASA"}
    ];
    angular.forEach(awesome_things, function(thing) {
      thing.name += '!';
    });
    $scope.awesome_things = awesome_things;
  }]);

// Directives
///////////////////////////////////////////////////////////////////////////////
angular.module('hello.directives', []).directive('awesome', [function () {
    return {
      restrict: 'E',
      controller: 'AwesomeCtrl',
      templateUrl: 'partials/awesome.html'
    };
  }]);
