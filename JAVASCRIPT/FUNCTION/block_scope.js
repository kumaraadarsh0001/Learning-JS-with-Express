//We can access block scope local variable from any where
// if we can use let it will not access from anywhere it give error
if (true) {
  let i = 20;
  console.log(i);
}
// console.log(i);
