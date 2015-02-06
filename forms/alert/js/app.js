'use strict';

var hello = angular.module('hello', ['hello.controllers']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', function ($scope) {

    // hello msg
    var hello_msg = 'Forms with alerts';
    $scope.hello_msg = hello_msg;

    // submit form callback
    $scope.submit_data = function() {
      console.log($scope.user);
    }
  }]);
