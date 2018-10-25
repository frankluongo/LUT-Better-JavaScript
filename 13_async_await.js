// Made up code
// imported chargeCard
const chargeCard = () =>
  new Promise((resolve, reject) => {
    // card is valid
    //reject("fail!!!");

    if (true) {
      return resolve(true);
    }
    return resolve(false);
  });

const chargeCC = async cc => {
  try {
    // const user = getUser();
    const res = await chargeCard(cc);
    console.log(res);
  } catch(error) {
    console.log(error);
  }
};

chargeCC("12345");

// Callback hell
// chargeCard('12341234123', (res) => {
//   // time to do something
//   saveToDb(res, () => {
//     // time to do something else
//   })
// });
