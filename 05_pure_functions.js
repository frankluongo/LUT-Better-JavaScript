//* Immutable VS Mutable
// - Can't be changed VS can be changed
// - Immutable can't be changed, mutable can
// - You want to use immutable code instead of mutable

// Mutable
let name = "Scott";
name = name + " Tolinski";
console.log(name);

// Immutable
const name2 = "Scott";
const fullName = name2 + " Tolinski";
console.log(fullName);


// Pure Function
// - A function that will always return the same thing with the same input
// - Functions should always be like this
// - This Code becomes more testable
// - Cacheable using memoization

// Pure
const addTwo = (x) => x + 2;
console.log(addTwo(2));

// Impure
let multi = 3; // External State
const addThree = (x) => x + multi;
console.log(addThree(2));
multi = 4;
console.log(addThree(2));
multi = 7;
console.log(addThree(2));

// Impure
let multi2 = 3; // External State
const addFour = (x) => {
  multi2 += 2;
  return (`Add Four: ${x + multi2}`);
};
console.log(addFour(2));
console.log(addFour(2));
console.log(addFour(2));
