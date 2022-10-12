const add = require('./add');

const subtract = require('./subtract');

const multiply = require('./multiply');

const divide = require('./divide');

const firstNumber = Number(process.argv[2]);

const secondNumber = Number(process.argv[4]);

const operator = process.argv[3];

if (operator === 'plus') {
  console.log('Result:', add(firstNumber, secondNumber));
}

if (operator === 'subtract') {
  console.log('Result:', subtract(firstNumber, secondNumber));
}

if (operator === 'divide') {
  console.log('Result:', divide(firstNumber, secondNumber));
}

if (operator === 'multiply') {
  console.log('Result:', multiply(firstNumber, secondNumber));
}
