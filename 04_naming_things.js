//* Consistency is King!
// - Always naming the same thing the same way is more important than what you name it
// - We want to be clear, searchable and obvious
// - Use Var names that make sense for the data


//! NEVER DO THIS - IT'S NOT NAMED CORRECTLY! We're using inconsistent names here
// const hireDev = ({ devInfo }) => {
//   const hiredDevInfo = {
//     hired: true,
//     ...devInfo
//   }
// }


const hireDev = ({ dev }) => {
  const hiredDevInfo = {
    hired: true,
    ...dev
  }
  return hiredDevInfo;
}

const BASE_SALARY = 16000;
const SALARY_MULITIPLIER = 4;


// Paramters are what is between the parentheses
const makePerson = ({ firstName, age, job, lastName, salary = BASE_SALARY}) => {
  return {
    name: `${firstName} ${lastName}`,
    age,
    job,
    salary: salary * SALARY_MULITIPLIER
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


const salesYearToDate = 100000;
console.log(salesYearToDate);

console.log(dev);
console.log(hireDev({salesYearToDate}));


//* Consistency is King!
// Always naming the same thing the same way is more important than what you name it
