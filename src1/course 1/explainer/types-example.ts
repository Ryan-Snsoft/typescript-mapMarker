// Primitive Types
type Primitives = number | string | boolean | symbol | undefined | null;

// Literal Types
type Literals = 30 | "Hi" | true | 1000n;

const ten: 10 = 10;

type TrafficLight = "Red" | "Yellow" | "Green";

// Data Structures
type DataStructures =
| { key1: boolean; key2:number } // objects
| { [key: string]: number } // records 
| [boolean, number] // tuples
| number[]; //arrays

// Unions and Intersections
type Union = X | Y;
type Intersection = X & Y;

