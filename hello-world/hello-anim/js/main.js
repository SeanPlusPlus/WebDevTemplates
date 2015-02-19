'use strict';

(function() {

  var foo = null; // object

  function shrink() {
    if (parseInt(foo.style.width.split('px')[0]) === 0) {
      grow();
    }
    else {
      foo.style.width = parseInt(foo.style.width)-1+'px';
      foo.style.height = parseInt(foo.style.height)-1+'px';
      setTimeout(shrink,20);
    }
  }

  function grow() {
    if (parseInt(foo.style.width.split('px')[0]) === 100) {
      shrink();
    }
    else {
      foo.style.width = parseInt(foo.style.width)+1+'px';
      foo.style.height = parseInt(foo.style.height)+1+'px';
      setTimeout(grow,20);
    }
  }

  function init() {
    foo = document.getElementById('green'); 
    foo.style.width  = '50px'; 
    foo.style.height = '50px'; 
    grow(); 
  }

  window.onload = init;
})();

