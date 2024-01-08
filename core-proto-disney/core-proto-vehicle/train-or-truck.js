// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;

  this.drive = function (kmh) {
    this.speed = kmh;
    return `Polly driving at ${kmh} kilometers per hour`;
  };

  this.stop = function () {
    this.speed = 0;
    return "Polly has stopped";
  };
}

function Train(driver) {
  Vehicle.call(this, driver);
}

Train.prototype = Object.create(Vehicle.prototype);

Object.defineProperty(Train.prototype, 'constructor', {
  value: Train,
  enumerable: false,
  writable: true,
});

function Truck(driver) {
  Vehicle.call(this, driver);

  this.cargo = [];
}

Truck.prototype = Object.create(Vehicle.prototype);

Object.defineProperty(Truck.prototype, 'constructor', {
  value: Truck,
  enumerable: false,
  writable: true,
});

Truck.prototype.loadCargo = function (cargo) {
  this.cargo.push(cargo);
  return this.cargo;
};

Truck.prototype.unloadCargo = function () {
  return this.cargo.pop();
};

module.exports = { Vehicle, Train, Truck };
