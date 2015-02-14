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
      series: ['65 and over', '18 and uder'],
      data: [{
        x: "California",
        y: [12.5, 23.9],
        tooltip: "this is tooltip"
      }, {
        x: "Texas",
        y: [11.2, 26.6],
      }, {
        x: "Florida",
        y: [18.7, 20.6],
      }, {
        x: "New York",
        y: [14.4, 21.6]
      }]
    };
  }]);
