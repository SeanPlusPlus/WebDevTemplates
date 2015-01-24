'use strict';

var hello = angular.module('hello', ['hello.controllers']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', function ($scope) {

    // hello msg
    var hello_msg = 'Hello Forms';
    $scope.hello_msg = hello_msg;
    console.log(hello_msg);
  }]);
