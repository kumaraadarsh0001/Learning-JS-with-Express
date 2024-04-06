let fees = {
  Rahul: 100,
  Aadarh: 200,
  Adition: function () {
    return 6666 + 9999;
  },
  Subtraction: function () {
    return 9999 - 6666;
  },
  Name: function () {
    return "Flirting King Kumar Aadarsh";
  },
};
// Accessing Properties
console.log(fees);

console.log(fees.Adition());

console.log(fees["Subtraction"]());

console.log(fees["Name"]());
