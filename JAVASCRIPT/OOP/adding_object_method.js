let fees = {
  Aadarh: 200,
};

console.log(fees);

fees.Adittion = function () {
  return 6969 + 6969;
};
fees["Subtraction"] = function () {
  return 9696 - 6969;
};

console.log(fees);

console.log(fees.Adittion());

console.log(fees.Subtraction());
