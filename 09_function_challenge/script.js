// Challenge 1
const getCelsius = (F) => ((F - 32) * 5) / 9;

console.log(`The tempreture is ${getCelsius(32)} \xB0C`);

// Challenge 2
// My solution
// const minMax = (arr) => ({
//   min: Math.min(...arr),
//   max: Math.max(...arr),
// });

// console.log(minMax([1, 2, 3]).min);
// console.log(minMax([1, 2, 3]).max);

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6, 7]));

// Challenge 3
// My solution
// (function area(a, b) {
//   const c = a * b;
//   console.log(
//     `The area of a rectangle with a length of ${a} and a width of ${b} will be ${c}`
//   );
// })(10, 5);

((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(10, 5);
