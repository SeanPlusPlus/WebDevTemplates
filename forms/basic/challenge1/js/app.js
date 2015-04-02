'use strict';

var hello = angular.module('hello', ['hello.controllers']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', function ($scope) {

    // hello msg
    var hello_msg = 'Hello Forms';
    $scope.hello_msg = hello_msg;

    // submit form callback
    $scope.submit_data = function() {
      var arr = $scope.user.entry.split('');
      var output = {};
      angular.forEach(arr, function(element) {
        if (element in output) {
          output[element] = output[element] + 1;
        }
        else {
          output[element] = 1;
        }
      });
      console.log(output);
    }
  }]);
