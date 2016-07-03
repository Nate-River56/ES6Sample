"use strict";

(function block() {
  var x = 1;
  console.log(x);
  {
    var _x = 2;
    console.log(_x);
  }
  console.log(x);
})();