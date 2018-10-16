
//* Function Declaration
// ?-------------------------------------------
// Hoisted AKA sent to the top of the document and loaded first.
function sayHi() {
  // Always return something
  return console.log('Hi');
}

sayHi();

//* Function Expression
// ?-------------------------------------------
// - Can run without needing to be declared
// - Variable containing an anonymous function
// - Not Hoisted
const sayHi = function() {
  return console.log('hi!');
}

// It can be named...
const sayHi = function sayHi() {
  return console.log('hi!');
}


//* ES6 Preferred Function Expression(s)
// ?-------------------------------------------
const sayHi = () => {
  return console.log('hi!');
};

const sayHi = () => console.log('hi!');
// OR
const sayHi = () => (
  console.log('hi!')
);


sayHi();
