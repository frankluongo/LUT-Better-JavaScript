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
// - Takes each item from the array and does something to it

const DISCOUNT = 0.75;

// const discountedItems = shoppingCart.map(item => {
//   let { price } = item;
//   item.price = price * DISCOUNT;
//   return item;
// });

const discountedItems = shoppingCart.map(item => {
  return {
    ...item,
    salePrice: item.price * DISCOUNT
  };
});

const discountedCart = simpleShoppingCart.map(value => value * DISCOUNT);

console.log(shoppingCart);
console.log(discountedItems);
console.log(discountedCart);
