var Mobile = function (name, model, ram, memory, price) {
  // Instance Member
  this.name = name;
  this.model = model;
  this.ram = ram;
  this.memory = memory;
  this.price = price;
};
var Samgung = new Mobile("Samsung", "Galaxy", 8, 128, 70000);
var RealMe = new Mobile("RealMe", "Narzo 30 Pro", 8, 128, 20000);
// if you want to add any another variable in Constructor for all items
// Prototype Member :- you can use this
Mobile.prototype.color = "White";
console.log(Object.keys(Samgung));
// if you want to see prototype member also so you can use
for (var key in Samgung) {
  console.log(key);
}
