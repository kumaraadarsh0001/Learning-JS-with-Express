class Father {
  showFMoney() {
    return "Father's Money !!!!!";
  }
}
class Son extends Father {
  showSMoney() {
    return "Son's Money !!!!!";
  }
}
class GrandSon extends Son {
  showGSMoney() {
    return "Grand Son's Money !!!!!";
  }
}
var s = new Son();
var gs = new GrandSon();
console.log("Son Access :");
console.log(s.showFMoney());
console.log(s.showSMoney());
console.log("Grand Son Access :");
console.log(gs.showFMoney());
console.log(gs.showSMoney());
console.log(gs.showGSMoney());
