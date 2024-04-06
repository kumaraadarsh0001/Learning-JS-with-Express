function Mobile(model) {
  this.model = model;
  this.memory = 128;
}
var Samsung = new Mobile("Galaxy");

if (typeof Samsung.memory !== "undefined")
  console.log("This is avilabe  : " + Samsung.memory);
else console.log("This is not avilable !!!");

var RealMe = new Mobile("RealMe X7");

if ("model" in RealMe) console.log("This is avilabe  : " + RealMe.model);
else console.log("This is not avilable !!!");

if (RealMe.hasOwnProperty("color")) console.log("Yes !!!!!" + RealMe.color);
else console.log("No !!!!!");
