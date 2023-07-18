// Push - Pop one by one in order

// function first() {
//   console.log("first...");
// }
// function second() {
//   console.log("second...");
// }
// function third() {
//   console.log("third...");
// }

// first();
// second();
// third();

//-------------------------

// Stuck top of each other

function first() {
  console.log("first...");
  second();
}
function second() {
  console.log("second...");
  third();
}
function third() {
  console.log("third...");
}

first();
