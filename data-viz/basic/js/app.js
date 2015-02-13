var myApp = angular.module('myApp', ['myApp.controllers', 'myApp.directives']);
angular.module('myApp.controllers', []).
  controller('MainCtrl', ['$scope', function ($scope) {
    $scope.data = "42,4,55,15,16,33,52,2"
  }]);
