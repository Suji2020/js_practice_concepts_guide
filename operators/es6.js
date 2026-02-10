//Convert this constructor into a class:

/**function Car(brand) {
  this.brand = brand;
}


Car.prototype.drive = function () {
  console.log(this.brand + " is driving");
};*/


class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(this.brand + " is driving");
  }
}

let c1 = new Car("Audi");
c1.drive();