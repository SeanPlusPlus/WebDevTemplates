'use strict';

angular.module('hello.controllers', []).
  controller('HomeCtrl', ['$scope', 'helloService', function ($scope, helloService) {

    // AJAX call
    var request = {'method': 'get', 'resource': 'awesome.json'};
    helloService.async(request).then(function(response) {
      $scope.awesome_things = response.data;
    });
  }]).

  controller('ThingCtrl', ['$scope', 'helloService', '$routeParams', function ($scope, helloService, $routeParams) {

    console.log($routeParams);

    // AJAX call
    var request = {'method': 'get', 'resource': 'awesome.json'};
    helloService.async(request).then(function(response) {
      angular.forEach(response.data, function(thing) {
        if (thing.name === $routeParams.thing) {
          $scope.thing = thing;
        }
      });
    });
  }]);
