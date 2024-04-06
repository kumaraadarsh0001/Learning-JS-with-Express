var i = 0;
do {
  //   console.log(i);
  console.log(i + ". " + "Outer Do While Loop");
  i++;
  var j = 0;
  do {
    // console.log(j);
    console.log("   " + j + ". " + "Inner Do While Loop");
    j++;
  } while (j < 3);
} while (i < 5);
