'use strict';

// customized for yahoo finance query
angular.module('hello.services', []).
  factory('helloService', function($http) {
    var myAppService = {
      async: function(request) {

        // the details of our request
        var data     = request.symbol;
        var method   = 'get';
        var url      = 'http://query.yahooapis.com/v1/public/yql';
        var query    = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + data + "')");
        var resource = url + '?q=' + query + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env";

        // $http returns a promise, which has a then function, which also returns a promise
        var promise  = $http[method](resource)
        promise.then(function (response) {

          // the return value gets picked up by the then in the controller
          return response.data;
        });

        // return the promise to the controller
        return promise;
      }
    };

    // to initialize this object in ctrl
    return myAppService;
  });


// source:
// http://stackoverflow.com/questions/12505760/angularjs-processing-http-response-in-service
