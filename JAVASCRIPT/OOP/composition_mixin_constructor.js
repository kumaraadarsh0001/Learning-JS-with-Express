// Mixin function
function mixin(target, ...source) {
  Object.assign(target, ...source);
}
// Composition or Mixin
var eating = {
  eat: function () {
    return "Iam a human \nI can eat !!!!\n";
  },
};
var walking = {
  walk: function () {
    return "I can walk !!!!\n";
  },
};
var talking = {
  talk: function () {
    return "I can talk !!!!\n";
  },
};
var starting = {
  start: function () {
    return "I am a Robot\nI can start by green button !!!!\n";
  },
};
// Human class
var Human = function () {};
// Robot class
var Robot = function () {};
// Composition feature to human
mixin(Human.prototype, eating, talking, walking);
// Composition feature to human
mixin(Robot.prototype, starting, talking, walking);

var Aadarsh = new Human();
console.log("Aadarsh : \n" + Aadarsh.eat() + Aadarsh.talk() + Aadarsh.walk());
var Anish = new Human();
console.log("Anish : \n" + Anish.eat() + Anish.talk() + Anish.walk());
var Sofiya = new Robot();
console.log("Sofiya : \n" + Sofiya.start() + Sofiya.talk() + Sofiya.walk());
