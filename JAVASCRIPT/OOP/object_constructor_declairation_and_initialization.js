function add() {
  return 9999 + 8888;
}

var fees = new Object();
fees.addition = add;
fees.Aadarsh = 200;
fees.Anish = 400;
fees.Dilip = 300;
fees["Super man"] = 2000;

console.log(fees);
console.log("This is Adition Function   :   " + fees.addition());
