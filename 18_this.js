console.log(this);

const test = {
  name: "test",

  testFunc: function() {
    console.log(this);
  },
  testFuncTwo: () => {
    console.log(this);
  }
};

function team(name) {
  this.name = name;
  console.log(this);
}

// Sets context as the button!
const button = document.getElementById("new-colors");
button.addEventListener("click", function() {
  console.log(this);
  this.innerText = "Clickity Click";
});

test.testFunc();
test.testFuncTwo();
// team();
var wings = new team("Devils");
