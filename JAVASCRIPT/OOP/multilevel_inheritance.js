// Super class
var Mobile = function () {
  this.a = 100;
};

// Prototype Properti of mobile
Mobile.prototype.z = 30;

// Sub class
var Samsung = function () {
  // It calls super class constructor and initialiaze property without this you can not access super class  property using sub calss object
  Mobile.call(this);
  this.b = 20;
};
var Galaxy = function () {
  Samsung.call(this);
  this.c = 500;
};

// Prototype inheritance
Samsung.prototype = Object.create(Mobile.prototype);

// Prototype Inheritance
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

Galaxy.prototype = Object.create(Samsung.prototype);
Galaxy.prototype.constructor = Galaxy;

var m = new Mobile();
var s = new Samsung();
var g = new Galaxy();
console.log("Galaxy object can access\n" + "Mobile a  " + g.a);
console.log("Samsung b  " + g.b);
console.log("Galaxy c  " + g.c);
console.log();
console.log("Samsung object can access\n" + "Mobile a  " + s.a);
console.log("Samsung b  " + s.b);
console.log("Mobile prototype  " + s.z);
console.log("Galaxy c  " + s.c);
console.log();
console.log("Mobile object can access\n" + "Mobile a  " + m.a);
console.log("Samsung b  " + m.b);
console.log("Mobile prototype  " + m.z);
console.log("Galaxy c  " + m.z);
console.log();
