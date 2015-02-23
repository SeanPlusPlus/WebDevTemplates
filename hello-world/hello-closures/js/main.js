'use strict';

// http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

(function() {

  function foo(x) {
    var tmp = 3;
    function bar(y) {
      console.log(x + y + (++tmp)); // will alert 16
    }
    bar(10);
  }
  foo(2);

})();

