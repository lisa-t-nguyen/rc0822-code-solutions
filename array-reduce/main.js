const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumAll = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(sumAll);

const productAll = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);

console.log(productAll);

const balance = account.reduce((currentAmount, currentAccount) => {
  if (currentAccount.type === 'deposit') {
    currentAmount += currentAccount.amount;
  } else {
    currentAmount -= currentAccount.amount;
  }
  return currentAmount;
}, 0)

console.log(balance);

const composite = traits.reduce((trainer, trait) => {
  Object.assign(trainer, trait);
  return trainer;
}, {})

console.log(composite);
