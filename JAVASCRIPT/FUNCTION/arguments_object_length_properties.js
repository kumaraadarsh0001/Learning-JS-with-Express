function display(fname, lname) {
  // console.log(arguments.length); //it will give how many arguments come in
  for (i = 0; i < arguments.length; i++) {
    console.log(i);
    console.log(arguments[i]);
  }
}
display("Kumar", "Aadarsh", "Lovelyboy Badshah");
