// window is top most object so we dont even need to write 'window.'
// window.alert("Hello");
// alert("Hello");

// console.log(window.innerWidth);
// console.log(innerWidth);

const x = 100;

// console.log(x, "in global");

// settings > editor.suggest.showWords uncheck for get rid of abc log
// log -> console.log();

function run() {
  console.log(innerHeight);
  console.log(x, "in global");
  // we can access x in here as well
}

run();

if (true) {
  console.log(x, "in global");
  // we can access x in here as well
}

function add() {
  // this x will overwrite globally scoped x
  const x = 1;
  const y = 50;
  // this is function scope
  console.log(y);

  console.log(x + y);
}
// it can not access y in here
// console.log(y);

add();
