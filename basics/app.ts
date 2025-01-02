// 1. Basic Types
// Problem:
// Write a function calculateArea that takes the dimensions of a rectangle (width and height) as
// arguments and returns its area. Ensure the arguments are of type number and return type is also number.

function calculateArea(width: number, height: number): number {
  return width * height;
}

// 2. Interfaces
// Problem:
// Define an interface User with the following fields:

// id (number)
// name (string)
// email (string, optional)
// Then, create a function printUserDetails that takes a User object and logs the details. Make email optional.

interface User {
  id: number;
  name: string;
  email?: string;
}

function printDetails(user: User) {
  console.log(user);
}

printDetails({ id: 5, name: "Albin" });

// 3. Union Types
// Problem:
// Create a function formatInput that accepts a parameter input of type string | number.

// If it's a number, return its square.
// If it's a string, return the string in uppercase.

type sORn = string | number;

function formatInput(input: string | number): sORn {
  if (typeof input == "string") {
    return input.toUpperCase();
  } else if (typeof input == "number") {
    return input * input;
  } else {
    // This will never happen, but TypeScript requires it
    throw new Error("Invalid input type");
  }
}

console.log(formatInput(5));
console.log(formatInput("hello"));

// 4. Generics
// Problem:
// Write a generic function getArray that takes an argument of type T and
// returns an array containing two copies of that argument. The function should work for any type.

function getArray<T>(arg: T): [T, T] {
  return [arg, arg];
}

console.log(getArray("hello"));
console.log(getArray(5));

// 5. Type Aliases
// Problem:
// Define a type alias Coordinates for an object with x and y properties of type number.
// Write a function distance that calculates the distance between two coordinates.

type Coordinates = {
  x: number;
  y: number;
};

function distance(point1: Coordinates, point2: Coordinates): number {
  const dx = point2.x - point1.x; // Difference in x-coordinates
  const dy = point2.y - point1.y; // Difference in y-coordinates
  return Math.sqrt(dx * dx + dy * dy); // Euclidean distance formula
}

const pointA: Coordinates = { x: 3, y: 4 };
const pointB: Coordinates = { x: 6, y: 8 };

console.log(distance(pointA, pointB)); // Output: 5
