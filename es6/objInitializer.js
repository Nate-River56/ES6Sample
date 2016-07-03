var ok = function(){
  console.log("OK");
}

var ng = function(){
  console.log("NG");
}

const status = {ok, ng};

status.ok();
status.ng();
