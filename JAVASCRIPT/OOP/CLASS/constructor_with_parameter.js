// Class Declairation
class Mobile {
  constructor(Name, Model) {
    // Instance Member
    this.name = Name;
    this.model = Model;
    this.show = function () {
      return "Mobile Name  :  " + this.name + "\nModel Name  :  " + this.model;
    };
  }
  // Prototype Member
  display() {
    return "Prototype Method Called";
  }
}

var Samsung = new Mobile("Samsung", "galaxy");
// console.log(Samsung.name);
// console.log(Samsung.model);
console.log(Samsung.show());
console.log(Samsung.display());
