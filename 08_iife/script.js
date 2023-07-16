(function () {
  const user = "John";
  console.log(user);

  const hello = () => console.log("Hello from the IIFE");
})(); // we put another () end of the function because we want to invoke it

// to get rid of global scope pollution we use immediately invoked function expression

//hello(); // this will give error because it is function scoped

(function (name) {
  console.log("Hello " + name);
})("Shawn"); // we can pass parameters on second parantheses

(function hello() {
  console.log("hello");

  // but you can call it inside of it as recursion
  // hello(); // it will crash browser becase of infinite loop
})();

// hello(); also you cant call this function out side of IIFE
