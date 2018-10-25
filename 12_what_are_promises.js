// Made up code
// imported chargeCard

/*
const chargeCard = () => null;


// Promises stop you from needing to do shit like this
chargeCard('1234123412345', (res) => {
  // do something
  savetoDb(res, () => {
    // Do more stuff
  });
});
*/

const chargeCard = () => new Promise((resolve, reject) => {
  // Card is valid
  reject('faaaail!');
  if (true) {
    // The resolve is what the promise returns
    return resolve(true);
  }

  return resolve(false);
});

chargeCard()
.then((val) => console.log(val))
.catch((err) => console.log(err))

console.log('hello');
