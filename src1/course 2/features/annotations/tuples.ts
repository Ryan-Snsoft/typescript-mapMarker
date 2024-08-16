const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
// or
const sprite: Drink = ['clear', true, 40];


const carSpecs: [number, number] = [400, 3345];

const carStats = {
    horsepower: 400,
    weight: 3354
};

