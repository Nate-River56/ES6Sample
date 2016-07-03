"use strict";

var babar = function babar() {
  for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  console.log(arg);
  console.log(Array.isArray(arg));
};