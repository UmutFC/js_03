// Execution Context has two parts, one is Memory which is variable environment and the other one is code execution which is thread of execution
// JavaScript is single threaded and its synchronous so its executed line by line

// Execution Context Phases

// Memory Creation Phase:
// 1. Global object is created (browser = window, Node.js = global)
// 2. 'this' object is created and bind it to the global object
// 3. Setup memory heap for storing variables and function references
// 4. Store functions and variables in global execution context and set to 'undefined'

// Execution Phase:
// 1. Execute code line by line
// 2. Create a new execution context for each function call

//------------------------------
// Creation Phase: I,II,III...
// Execution Phase: a,b,c...
// Function Execution Context - Creation Phase: 1,2,3...
// Function Exection Context - Execution Phase: 01,02,03...

let x = 100;
// I. x variable is allocated memory and stored as "undefined"
// a. places the value of 100 into the x variable
let y = 50;
// II. y variable is allocated memory and stored as "undefined"
// b. places the value of 50 into the y variable

// c. skips the function because there is nothing to execute
function sum(n1, n2) {
  // 1. n1 and n2 variables are allocated memory and stored as "undefined"
  // 01. n1 and n2 are assigned to 100 and 50
  // III. sum() function is allocated memory and stored all the code
  let sum = n1 + n2;
  // 2. sum variable is allocated memory and stored as "undefined"
  // 02. calculation is done and 150 is put into the sum variable
  return sum;
  // 03. return tells the function EC to return to the global EC with value of sum 150
}

let sum1 = sum(x, y);
// IV. sum1 variable is allocated memory and stored as "undefined"
// 04. return sum value into sum1 variable
let sum2 = sum(10, 5);
// V. sum2 variable is allocated memory and stored as "undefined"
// 05. open another function execution context and do the same thing with different parameters for sum2

// On dev tools when you open sources and script.js you can use debugger and put break point at any line. when you put break point to first line, non of the script will be executed but memory creation phase will be done and all variables will bet set undefined at Script part and functions will be inside of Global. If you use 'var' instead of const, var variable will be put on Global Scope as well.
