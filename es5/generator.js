"use strict";

(function () {

  var call = regeneratorRuntime.mark(function call_func() {
    return regeneratorRuntime.wrap(function call_func$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("いっちにー");
            _context.next = 3;
            return;

          case 3:
            console.log("さんしー");
            _context.next = 6;
            return;

          case 6:
            console.log("にーにっ");
            _context.next = 9;
            return;

          case 9:
            console.log("さんしー");

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, call_func, this);
  });

  console.log("ラジオ体操第一");
  call.next();
  console.log("てんてんて");
  call.next();
  console.log("てんててて");
  call.next();
  console.log("てんてててんてん");
  call.next();
})();