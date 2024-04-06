let fees = {};
fees.Rahul = 100;
fees.Aadarsh = 200;
fees.total = function () {
  return 100 + 300;
};
x = fees.total();
y = fees["total"]();
console.log(fees);
console.log(x);
console.log(y);
