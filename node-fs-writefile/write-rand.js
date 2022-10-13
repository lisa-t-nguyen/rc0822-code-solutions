const fs = require('fs');
const data = Math.random();
const randomNumber = data.toString() + '\n';

fs.writeFile('random.txt', randomNumber, 'utf-8', err => {
  if (err) throw err;
});
