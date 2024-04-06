function Mobile(model, price) {
  this.model = model;
  this.price = price;
  this.detail = function () {
    return model + "is Mobile Phone\n" + "And its Price is " + price + "\n";
  };
}
let Samsung = new Mobile("Galaxy", 24999);
let Xaiomi = new Mobile("Redmi 11 Prime", 11499);
let RealMe = new Mobile("RealMe X7", 19999);
console.log(Samsung.detail());
console.log(Xaiomi.detail());
console.log(RealMe.detail());
