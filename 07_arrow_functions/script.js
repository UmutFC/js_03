// function add(a, b) {
//   return a + b;
// }

//Arrow Function Syntax
const add = (a, b) => {
  return a + b;
};
// console.log(add(1, 2));

// Shorter version - Implicit Return
const subtract = (a, b) => a - b;
// console.log(subtract(10, 5));

const double = (a) => a * 2;
// if there is single parameter you dont need parantheses
// const double = a => a*2;

// Returning an Object
// you should put parantheses outside of curly braces
const createObject = () => ({
  name: "Furkan",
});

console.log(createObject());

const numbers = [1, 2, 3, 4, 5];

// you can use .forEach to iterate each element of an array
numbers.forEach(function (n) {
  console.log(n);
});

// shorter version
numbers.forEach((n) => console.log(n));
