function funcName() {
  console.log("Hi");
}

funcName();

// (x) inside of parentheses is for parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// passing argument
add(1, 2);

// on global scope you can use same named parameters in different functions
function subtract(num1, num2) {
  return num1 - num2;

  // we will not see the console log because we already returned and exited the function
  console.log("After the return");
}

const result = subtract(10, 2);

console.log(result, subtract(20, 5));
