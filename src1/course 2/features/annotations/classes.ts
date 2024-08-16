class Vehicle {
    drive(): void {
        console.log ('choo choo');
    }

    honk(): void {
        console.log('beep beep');
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();


class ACar extends Vehicle {
    drive(): void {
        console.log ('overwritten vroom');
    }
}

const aCar = new ACar();
aCar.drive();
aCar.honk();

