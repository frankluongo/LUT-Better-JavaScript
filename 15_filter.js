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

// .map
// iteratates over array, perform function on each item
// returns new array
// Returns with same amount of items

// .filter
// iterates over array, filters by a parameter and returns the array
// Will return same amount or less items

// Loops through array of numbers and modifies each one
// const discountCart = simpleShoppingCart.map((value) => {
//   return value * .75;
// });
// const discountCart = simpleShoppingCart.map(value => value * .75);

// Loops through items in cart, builds object with all properties from
// cart and then adds a new property with the sales price
const discountCart = shoppingCart.map(value => {
  return {
    ...value,
    salePrice: value.price * 0.75
  };
});

console.log(shoppingCart);
console.log(discountCart);

const tenOrMoreSimple = simpleShoppingCart.filter(item => item <= 10);

const tenOrMoreCart = shoppingCart.filter(item => item.price <= 10);

const tutorials = shoppingCart.filter(({type}) => type === 'tutorial');

const tutorialsOver30 = shoppingCart.filter(({type}) => type === 'tutorial').filter(({price}) => price > 20);

const complex = tutorialsOver30.map(product => ({...product, extra: product.price * 10}));

console.log(tenOrMoreCart);
console.log(tenOrMoreSimple);
console.log(tutorials);
console.log(tutorialsOver30);
console.log(complex);
