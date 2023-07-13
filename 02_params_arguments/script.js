// we can set default parameters easily inside of parentheses
function registerUser(user = "Bot") {
  //   if (!user) {
  //     user = "Bot";
  //   }

  return user + " is registered";
}

console.log(registerUser("John"));
console.log(registerUser()); // 'undefined' is registered

// Rest Paramters
// function sum(...rest)
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }

  //   return numbers;
  return total;
}

console.log(sum(1, 2, 3, 4));

// Object as params
// you can pass objects as parameters
function loginUser(user) {
  return `the user ${user.name} with the id of ${user.id} `;
}

const user = {
  id: 1,
  name: "John",
};

console.log(loginUser(user));

// you can also create object inside of parentheses
console.log(
  loginUser({
    id: 2,
    name: "Sara",
  })
);

// Arrays as params

// My solution
// let arr = [1, 2, 3, 4, 5];
// function rand(arr) {
//   console.log(arr[Math.floor(Math.random() * arr.length)]);
// }

// rand(arr);

// another option for get rid of array parentheses
function getRandom(arr) {
  // function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
