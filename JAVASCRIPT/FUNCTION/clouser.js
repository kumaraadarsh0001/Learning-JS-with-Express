var i = "   I is global variable";
function show() {
  // i and j both are accessable in Outer Functionn is called clouser
  var j = "   J is local variable of Outer Function";
  console.log("Outer Function is called");
  console.log(i);
  console.log(j);
  function disp() {
    // i, j and k both are accessable in Outer Functionn is called clouser
    var k = "   K is local variable of Inner Function";
    console.log("Inner Function is called");
    console.log(i);
    console.log(j);
    console.log(k);
  }
  disp();
}
show();
// Outer function can't access Inner function variable
// you can't access any of function variable from globaly
