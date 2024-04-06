//defining class
var Mobile = function (name, model, ram, memory, price) {
  this.name = name;
  this.model = model;
  this.ram = ram;
  this.memory = memory;
  this.price = price;
  this.detail = function () {
    return (
      "\nPhone Name : " +
      this.name +
      "\nModel Name : " +
      this.model +
      "\nModel Ram : " +
      this.ram +
      "\nModel Space : " +
      this.memory +
      "\nModel Price : " +
      this.price
    );
  };
};
var Samgung = new Mobile("Samsung", "Galaxy", 8, 128, 70000);
var RealMe = new Mobile("RealMe", "X7", 8, 128, 24999);
console.log(Samgung.detail());
console.log(RealMe.detail());
