'use strict';

var hello = angular.module('hello', ['hello.controllers', 'oitozero.ngSweetAlert']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'SweetAlert', function ($scope, SweetAlert) {

    // hello msg
    var hello_msg = 'Forms with alerts';
    $scope.hello_msg = hello_msg;

    // submit form callback
    $scope.submit_data = function() {

      // add alert
      SweetAlert.swal({
        'title':  'Success',
        'text':   'We got it!',
        'type':   'success'
      });
    }
  }]);
