document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

//* Destructuring Array
// This line simplifies the code below it.
//const [a, b] = ['hi', 'scott'];

const newArray = ["hi", "scott", "newItem", "everythingElse"];
//const a = newArray[0];
//const b = newArray[1];

const [a, b, ...c] = newArray;
console.log(a);
console.log(b);
console.log(c);

const person = {
  name: "Scott",
  age: 32,
  job: "Full Stack Dev"
};

const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job
  };
};

const dev = makePerson("Frank", 26, "Web Dev");
const { name, ...rest } = dev;
console.log(name, rest);
//console.log(makePerson(person));
