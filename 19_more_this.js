console.log(this);

const logGreeting = function() {
  console.log(this);
}

const test = {
  name: "test",
  testFunc: function() {
    this.name = "Scott";
    console.log(this);
  },
  testFuncTwo: () => {
    console.log(this, "arrow func");
  },
  testFuncFour: function() {
    ['h1', 'hello'].map(logGreeting.bind(this));
  }
};

function team(name) {
  this.name = name;
  console.log(this);
}

const button = document.getElementById("new-colors");
button.addEventListener("click", function() {
  this.innerText = "Clicked!";
});

//test.testFunc();
test.testFuncFour();
// team();
//const wings = new team("Red Wings");
