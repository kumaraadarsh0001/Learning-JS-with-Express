function display(x, y = null) {
  console.log("This is function");
  if (x == null) {
    console.log(2 * 2);
  } else if (x != null && y != null) {
    console.log(x * y);
  } else {
    console.log(10 * 10);
  }
}
display();
display(20, 20);
display(209);
