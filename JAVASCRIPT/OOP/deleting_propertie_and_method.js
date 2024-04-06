let fees = {
  Aadarh: 500,
  Rahul: 100,
  Anish: 400,
  Adittion: function () {
    return this.Anish + this.Aadarh;
  },
  Subtraction: function () {
    return 9696 - 6969;
  },
};
console.log(fees);
delete fees.Rahul;
delete fees.Subtraction;
console.log(fees);
console.log(fees.Adittion());
