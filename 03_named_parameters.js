// Paramters are what is between the parentheses
const makePerson = ({firstName, age, job, lastName}) => {
  return {
    name: `${firstName} ${lastName}`,
    age,
    job,
  };
};

const tempName = {
  firstName: "Scott",
  lastName: "Tolinksi",
  age: 32,
  job: "Web Dev"
}

// Arguments are what we pass in
const dev = makePerson(tempName);

console.log(dev);
