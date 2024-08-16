const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Helps with inference when extracting values 
const cars = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(10);

// Help with map / reduce / forEach
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types 
const importantDates: (Date | string )[] = [new Date()];
importantDates.push('2024-10-02');
importantDates.push(new Date());
importantDates.push(100);

