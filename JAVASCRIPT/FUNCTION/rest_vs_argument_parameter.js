// Rest Parameter
function restshow(a, ...args) {
  console.log("A   =" + a);
  console.log(args);
}
restshow(10, 20, 30, 40, 50, 60, 70, 80, 90);

// Argument Object
function display(a) {
  console.log("A   =" + a);
  console.log(arguments);
}
display(10, 20, 30, 40, 50);
