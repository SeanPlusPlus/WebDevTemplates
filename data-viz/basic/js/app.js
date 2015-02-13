'use strict';

var hello = angular.module('hello', ['hello.controllers', 'angularCharts']);

angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', function ($scope) {
    $scope.config = {
      title: 'Products',
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
      series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
      data: [{
        x: "Laptops",
        y: [100, 500, 0],
        tooltip: "this is tooltip"
      }, {
        x: "Desktops",
        y: [300, 100, 100]
      }, {
        x: "Mobiles",
        y: [351]
      }, {
        x: "Tablets",
        y: [54, 0, 879]
      }]
    };
  }]);
