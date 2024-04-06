class Father {
  //   constructor(fmoney) {
  //     this.money = fmoney;
  //   }
  show() {
    return "Father's Method !!!!!";
  }
}
class Son extends Father {
  //   constructor(smoney) {
  //     super(smoney);
  //   }
  show() {
    return "Son's Method !!!!!";
  }
}
var s = new Son();
console.log(s.show());
