// Object Literal Declair
var fees = {};
fees.Aadarsh = 72980;
fees["Anish"] = 25000;

// Object Literal Declair and Initialization
var course = {
  Aadarsh: "Python + Js",
  Vikrant: "Dart + flutter",
};

// Object Constructor
var display = new Object();

// Factory Function
function mobile(model) {
  return {
    model: model,
    price: function () {
      return "Price : Rs. 9999";
    },
  };
}
var Realme = mobile("Realme 9");
console.log(Realme.model + " " + Realme.price());

// Constructor Function
function Show() {
  this.Aadarsh = "Python + Js";
  this.Vikrant = "Dart + flutter";
}
