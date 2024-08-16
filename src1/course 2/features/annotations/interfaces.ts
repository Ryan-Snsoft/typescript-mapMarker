interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
};

printVehicle(oldCivic);

// How to fix long type annotaions
// Create interface

const printVehicle2 = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
};

printVehicle2(oldCivic);


// More complex syntax
interface Vehicle2 {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic2 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

const printVehicle3 = (vehicle: Vehicle2): void => {
    console.log(vehicle.summary());
};

printVehicle3(oldCivic2);

// Code reuse with interfaces

interface Reportable {
    summary(): string;
}

const drink2 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar}g of sugar`;
    }
};

const printSumamry = (item: Reportable): void => {
    console.log(item.summary());
};

printSumamry(oldCivic2);
printSumamry(drink2);
