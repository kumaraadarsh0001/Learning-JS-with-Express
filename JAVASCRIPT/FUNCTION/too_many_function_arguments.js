function manyarg(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments[2]);
  console.log(arguments[3]);
}

manyarg(10, 20, 30);
