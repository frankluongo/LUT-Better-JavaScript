const simpleShoppingCart = [10, 20, 25, 5, 10];

const shoppingCart = [
  {
    sku: "1234",
    price: 10,
    type: "t-shirt"
  },
  {
    sku: "1233334",
    price: 16,
    type: "tutorial"
  },
  {
    sku: "12111134",
    price: 30,
    type: "tutorial"
  }
];

// .every
// iterates over an array and returns true if every item passes a certain condition


// .some
// if any items meet a condition

// .forEach
// replaces the for loop

// .reverse()
// Reverses array -- this is destructive
// Spread contents into new array and perform this action

let newSimpleCart = [...simpleShoppingCart];
newSimpleCart.reverse();
console.log(newSimpleCart);
