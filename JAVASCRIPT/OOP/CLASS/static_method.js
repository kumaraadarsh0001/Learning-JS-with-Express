class Main {
  constructor() {
    return "Constructor Class";
  }
  static disp() {
    return "Static Method Called";
  }
}

// we can call static method by class name.function name
console.log(Main.disp());
var a = Main();
// console.log(a.disp());"it will give you error"
