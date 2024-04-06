var Mobile = class {
  constructor(Name, Model) {
    // Instance Member
    this.name = Name;
    this.model = Model;
    this.show = function () {
      return "Mobile Name  :  " + this.name + "\nModel Name  :  " + this.model;
    };
  }
  detail(price) {
    return (
      "Mobile Name  :  " +
      this.name +
      "\nModel Name  :  " +
      this.model +
      "Price is  :  " +
      price
    );
  }
};
