"use strict";

var _templateObject = _taggedTemplateLiteral(["あ", "い", ""], ["あ", "い", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function tag(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

tag(_templateObject, 1, 2);