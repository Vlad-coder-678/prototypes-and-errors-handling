// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
class Vehicle {
  constructor(driver) {
    this.driver = driver;
    this.speed = 0;
  }

  drive(kmh) {
    this.speed = kmh;
    return `Polly driving at ${kmh} kilometers per hour`;
  };

  stop() {
    this.speed = 0;
    return "Polly has stopped";
  };
}

class Train extends Vehicle {
  constructor(driver) {
    super(driver);
  }
}

class Truck extends Vehicle {
  constructor(driver) {
    super(driver);
    this.cargo = [];
  }

  loadCargo(cargo) {
    this.cargo.push(cargo);
    return this.cargo;
  };

  unloadCargo() {
    return this.cargo.pop();
  };
}

module.exports = { Vehicle, Train, Truck };
