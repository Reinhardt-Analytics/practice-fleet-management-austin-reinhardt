// 1. Define the Vehicle Class:
// ○ The constructor should include properties: type, make, model, year,
// and mileage.
// ○ Use default values for mileage (e.g., 0).

class Vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
 }

// 2. Add Methods:
// ○ drive(distance): Increases the vehicle’s mileage by the given
// distance (in kilometers or miles).

drive(distance) {
    this.mileage += distance;
  }

// ○ getDetails(): Returns a formatted string describing the vehicle’s
// details.

// 3. Create and Use Vehicle Objects:
// ○ Instantiate at least three vehicle objects with different properties (e.g.,
// a car, a truck, and a motorcycle).

const car = new Vehicle("Car", "Toyota", "Corolla", 2015);
const truck = new Vehicle("Truck", "Ford", "F-150", 2018);
const motorcycle = new Vehicle("Motorcycle", "Harley-Davidson", "Street 750", 2020);

// ○ Use the drive method to simulate trips and update mileage.

car.drive(150);
truck.drive(300);
motorcycle.drive(80);

// ○ Use the getDetails method to print each vehicle’s updated
// information.

console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());
