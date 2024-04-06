class Mobile {
  // if you can not create constructor here is created a default constructor by class
  // Prototype Member
  display() {
    return "Prototype Method Called";
  }
}

// Constructor is give permission to create new object by class
var Nokia = new Mobile();
console.log(Nokia.display());
