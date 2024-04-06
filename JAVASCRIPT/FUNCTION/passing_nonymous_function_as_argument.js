function show(myname) {
  return myname();
}
a = show(function () {
  return "Kumar Aadarsh";
});
console.log(a);
