'use strict';

var hello = angular.module('hello', 
    ['hello.controllers', 'hello.services', 'hello.directives', 'ngRoute']);

hello.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/:thing', {
        templateUrl: 'partials/thing.html',
        controller: 'ThingCtrl'
      });
}]);
