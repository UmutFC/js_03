console.log(addDollarSign(100));
// this console.log is working because of function declaration priority, hoisting

// Function Declaration
function addDollarSign(value) {
  return "$" + value;
}

console.log(addDollarSign(100));

//-----------------------------
// console.log(addPlusSign(200));
// this will give error because we created function as expression not declaration

// Function Expression
// expression is variable
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(200));

// about hoisting, only function declarations are available before the code is executed
