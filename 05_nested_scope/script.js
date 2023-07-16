function first() {
  const x = 100;

  // from child we can access to parent scope but we cant do reversed version
  function second() {
    const y = 200;
    console.log(x + y);
  }
  // console.log(y);
  second();
}

first();

if (1) {
  const x = 100;
  if (x == 100) {
    const y = 200;
    console.log(x + y);
  }
  // console.log(y);
}
