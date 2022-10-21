const takeAChance = require('./take-a-chance');

const promiseFunction = takeAChance('Lisa');

promiseFunction.then(
  resolve => {
    console.log("Hooray! You're so lucky, Lisa!");
  },
  reject => {
    console.log(("It's just bad luck, Lisa."));
  }
);
