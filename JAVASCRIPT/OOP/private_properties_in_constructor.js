//defining class
var Mobile = function (name, model, ram, memory, price) {
  this.name = name;
  this.model = model;
  this.ram = ram;
  this.memory = memory;
  var price = price;
  // Public Method
  this.sellingprice = function () {
    return price;
  };
};
var Samgung = new Mobile("Samsung", "Galaxy", 8, 128, 70000);
console.log(Samgung.price);

// Accessing Private Properties by Public Method
console.log(Samgung.sellingprice());
