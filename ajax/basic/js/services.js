'use strict';

var url = 'api/';

angular.module('hello.services', []).
  factory('helloService', function($http) {
    var myAppService = {
      async: function(request) {

        // the details of our request
        var method   = request.method;
        var resource = request.resource;
        var data     = request.data;

        // $http returns a promise, which has a then function, which also returns a promise
        var promise  = $http[method](url + resource, data)
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
