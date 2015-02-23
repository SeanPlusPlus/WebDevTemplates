'use strict';

angular.module('hello.controllers', []).

///////////////////////////////////////////////////////////////////////////////
  controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
///////////////////////////////////////////////////////////////////////////////
    $scope.isActive = function(route) {
      return route === $location.path();
    }
  }]).

///////////////////////////////////////////////////////////////////////////////
  controller('HomeCtrl', ['$scope', 'helloService', 
      function ($scope, helloService) {
///////////////////////////////////////////////////////////////////////////////
    var request = {'method': 'get', 'resource': 'awesome.json'};
    helloService.async(request).then(function(response) {
      $scope.awesome_things = response.data;
    });
  }]).

///////////////////////////////////////////////////////////////////////////////
  controller('ThingCtrl', ['$scope', 'helloService', '$routeParams', 
      function ($scope, helloService, $routeParams) {
///////////////////////////////////////////////////////////////////////////////
    var name = $routeParams.thing;
    var request = {'method': 'get', 'resource': name + '.json'};
    helloService.async(request).then(function(response) {
      $scope.thing = response.data;
    });
  }]);
