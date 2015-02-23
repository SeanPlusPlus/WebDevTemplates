'use strict';

angular.module('hello.directives', []).
  directive('navigation', [function() {
    return {
      templateUrl: 'partials/nav.html',
      controller: 'MainCtrl',
      restrict: 'E'
    };
  }]);
