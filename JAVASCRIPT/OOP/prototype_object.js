// it will return Object Prototype
"console.log(Object.prototype);";
// it will return Variable Prototype
"var b = {};";
"console.log(Object.getPrototypeOf(b));";
"console.log(Object.getPrototypeOf(Object.prototype));";

// Protype by new keyword
var b1 = new Object();
("console.log(Object.getPrototypeOf(b1));");
("console.log(Object.getPrototypeOf(Object.prototype));");

// Protype by Array
var b2 = new Array();
("console.log(Object.getPrototypeOf(b2));");
("console.log(Object.getPrototypeOf(Array.prototype));");

// Protype by String
var b3 = new String();
console.log(Object.getPrototypeOf(b3));
console.log(Object.getPrototypeOf(String.prototype));
