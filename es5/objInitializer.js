"use strict";

var ok = function ok() {
  console.log("OK");
};

var ng = function ng() {
  console.log("NG");
};

var status = { ok: ok, ng: ng };

status.ok();
status.ng();