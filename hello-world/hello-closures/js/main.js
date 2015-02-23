'use strict';

// http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

(function() {
  console.log('Example 1: ' + '\n');

  // A function doesn't have to return in order to be called a closure. 
  // Simply accessing variables outside of your immediate lexical scope creates a closure.
  function foo(x) {
    var tmp = 3;
    function bar(y) {
      console.log(x + y + (++tmp)); // will display 16
    }
    bar(10);
  }
  foo(2);
})();

(function() {
  console.log('\n\nExample 2: ' + '\n');

  // bar can still refer to x and tmp, even though it is no longer directly inside the scope.
  function foo(x) {
    var tmp = 3;

    return function (y) {
      console.log(x + y + (++tmp)); // will also display 16
    }
  }
  var bar = foo(2); // bar is now a closure.
  bar(10);
})();
