'use strict';

var hello = angular.module('hello', ['hello.controllers', 'angularCharts']);

angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', function ($scope) {
    $scope.config = {
      title: 'Awesome things',
      tooltips: true,
      labels: false,
      mouseover: function() {},
      mouseout: function() {},
      click: function() {},
      legend: {
        display: true,
        //could be 'left, right'
        position: 'right'
      }
    };

    $scope.data = {
      series: ['60 and up', '30 - 59', '0 - 29'],
      data: [{
        x: "California",
        y: [100, 500, 80],
        tooltip: "this is tooltip"
      }, {
        x: "Backpacking",
        y: [300, 100, 490]
      }, {
        x: "Chess",
        y: [35, 201, 12]
      }, {
        x: "Beer",
        y: [651, 55, 200]
      }, {
        x: "Bikes",
        y: [54, 30, 879]
      }]
    };
  }]);
