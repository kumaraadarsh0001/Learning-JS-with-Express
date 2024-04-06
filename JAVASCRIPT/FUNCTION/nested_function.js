function show() {
  var i = "I am local variable of Outer Function";
  console.log("I = " + i);
  //   console.log("I = " + j);
  // we did not access nested function variable from main function
  function disp() {
    var j = "I am local variable of Inner Function";
    console.log("I = " + i);
    console.log("J = " + j);
  }
  disp();
}
show();
