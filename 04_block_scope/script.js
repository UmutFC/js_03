const x = 100;
const foo = 1;
var bar = 2;
let led = 3;
// var will be added to 'window' object, but let and const will not be added

if (true) {
  // console.log(x);
  const y = 200;
  console.log(x + y);
}

// y is not defined on global scope
// console.log(x + y);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// 'i' will be undefined because it is defined inside of for loop scope
// console.log(i);

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// console.log(a); // error
// console.log(b); // error
console.log(c); // the big difference between 'var' and 'let', is,  var is accessible from outside. var is not block scoped, it is function scoped

function run() {
  var d = 100;
  console.log(d);
}

run();

console.log(d); // this will give us error even variable is defined as 'var' because var is function scoped so we cant access it from outside of the function
