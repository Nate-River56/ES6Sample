

(function(){

  var call = function *call_func(){
    console.log("いっちにー");
    yield;
    console.log("さんしー");
    yield;
    console.log("にーにっ");
    yield;
    console.log("さんしー");
  }

  console.log("ラジオ体操第一");
  call.next();
  console.log("てんてんて");
  call.next();
  console.log("てんててて");
  call.next();
  console.log("てんてててんてん");
  call.next();
}());
