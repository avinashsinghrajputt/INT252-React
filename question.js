function createVehicleClasses() {
    class Vehicle {
        #make;
        #model;

        constructor(make, model) {
            this.#make = make;
            this.#model = model;
        }

        getDetails() {
            return `Make: ${this.#make}, Model: ${this.#model}`;
        }

        static compareVehicles(vehicle1, vehicle2) {
            return vehicle1.#make === vehicle2.#make && vehicle1.#model === vehicle2.#model;
        }
    }

    class Car extends Vehicle {
        constructor(make, model, year, mileage) {
            super(make, model);
            this.year = year;
            this.mileage = mileage;
        }

        getDetails() {
            return `${super.getDetails()}, Year: ${this.year}, Mileage: ${this.mileage}`;
        }

        drive(distance) {
            this.mileage += distance;
        }
    }

    const myCar = new Car('Toyota', 'Corolla', 2020, 15000);
    console.log(myCar.getDetails());

    const car1 = new Car('Toyota', 'Corolla', 2020, 15000);
    const car2 = new Car('Honda', 'Civic', 2019, 20000);

    console.log(Car.compareVehicles(car1, car2)); 
    console.log(Car.compareVehicles(myCar, car1)); 

    myCar.drive(500);
    console.log(myCar.getDetails());
}

createVehicleClasses();
