// Class Declairation
class Mobile {
  constructor() {
    // Instance Member
    this.name = "Samsung";
    this.model = "galaxy";
    this.show = function () {
      return "Mobile Name  :  " + this.name + "\nModel Name  :  " + this.model;
    };
  }
  // Prototype Member
  display() {
    return "Prototype Method Called";
  }
}

var Samsung = new Mobile();
// console.log(Samsung.name);
// console.log(Samsung.model);
console.log(Samsung.show());
console.log(Samsung.display());
