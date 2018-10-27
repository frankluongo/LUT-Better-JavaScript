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

// .reduce
// iterates over an array, uses the values from the array to output one value
// outputs single value

const total = simpleShoppingCart.reduce((total, currentValue) => total + currentValue);
console.log(total);
