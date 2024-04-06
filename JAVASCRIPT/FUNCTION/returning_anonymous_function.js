function disp(a) {
  return function (b) {
    return a + b;
  };
}
var show = disp(20);

console.log(show(30));
