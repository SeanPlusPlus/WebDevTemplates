var hello = angular.module('hello', ['hello.controllers']);

angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', function ($scope) {

    'use strict';

    // hello msg
       var helloMsg = 'Some Awesome Things';
    $scope.helloMsg = helloMsg;
  }]);
