var i = "I am Global Variable";
function show() {
  var j = "I am Local Variable";
  console.log("We can access global variable anywhere");
  console.log(i + " inside the function");
}
show();
console.log(i + " outside of the function");
console.log("We can't access local variable outsite of there place");
console.log(j);
