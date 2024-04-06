var i = 0;
while (i < 5) {
  console.log(i + ". " + "Outer While Loop");
  i++;
  var j = 0;
  while (j < 3) {
    console.log("   " + j + ". " + "Inner While Loop");
    j++;
  }
}
