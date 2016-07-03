"use strict";

var echoName = function echoName() {
  var name = arguments.length <= 0 || arguments[0] === undefined ? "Unknown" : arguments[0];

  console.log("Your name is " + name + ".");
};