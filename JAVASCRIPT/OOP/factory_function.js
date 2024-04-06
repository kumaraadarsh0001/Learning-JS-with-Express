function mobile(model) {
  return {
    model: model,
    price: function () {
      return "Price : Rs. 9999";
    },
  };
}
var Samsung = mobile("Galaxy");
console.log(Samsung.model + " " + Samsung.price());
var Xaiomi = mobile("Redmi 9 Prime");
console.log(Xaiomi.model + " " + Xaiomi.price());
var Realme = mobile("Realme 9");
console.log(Realme.model + " " + Realme.price());
