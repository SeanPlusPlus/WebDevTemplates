'use strict';

// inspired by: http://www.schillmania.com/content/projects/javascript-animation-1/

(function() {

  var foo = null; // object

  function shrink() {
    if (parseInt(foo.style.width.split('px')[0]) === 100) {
      grow();
    }
    else {
      foo.style.width = parseInt(foo.style.width)-1+'px';
      foo.style.height = parseInt(foo.style.height)-1+'px';
      setTimeout(shrink,20);
    }
  }

  function grow() {
    if (parseInt(foo.style.width.split('px')[0]) === 300) {
      shrink();
    }
    else {
      foo.style.width = parseInt(foo.style.width)+1+'px';
      foo.style.height = parseInt(foo.style.height)+1+'px';
      setTimeout(grow,20);
    }
  }

  function init() {
    foo = document.getElementById('main'); 
    foo.style.width  = '100px'; 
    foo.style.height = '100px'; 
    grow(); 
  }

  window.onload = init;
})();

