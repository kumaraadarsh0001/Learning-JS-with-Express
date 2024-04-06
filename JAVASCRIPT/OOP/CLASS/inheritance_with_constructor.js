class Father {
  constructor(fmoney) {
    this.money = fmoney;
  }
  showFMoney() {
    return this.money + " Father's Money !!!!!";
  }
}
class Son extends Father {
  constructor(smoney) {
    super(smoney);
  }
  showSMoney() {
    return this.money + " Son's Money !!!!!";
  }
}
class GrandSon extends Son {
  constructor(money) {
    super(money);
  }
  showGSMoney() {
    return this.money + " Grand Son's Money !!!!!";
  }
}

var s = new Son(50000);
var gs = new GrandSon(70000);
console.log("Son Access :");
console.log(s.showFMoney());
console.log(s.showSMoney());
console.log("Grand Son Access :");
console.log(gs.showFMoney());
console.log(gs.showSMoney());
console.log(gs.showGSMoney());
