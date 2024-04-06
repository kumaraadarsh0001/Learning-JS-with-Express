// Composition or Mixin
var eating = {
  eat: function () {
    return "I can eat !!!!\n";
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
    return "Robot can start by green button\n";
  },
};
var Aadarsh = Object.assign({}, eating, walking, talking);
console.log("Aadarsh : \n" + Aadarsh.eat() + Aadarsh.talk() + Aadarsh.walk());
var Robot = Object.assign({}, walking, talking, starting);
console.log("Robot : \n" + Robot.start() + Robot.talk() + Robot.walk());
