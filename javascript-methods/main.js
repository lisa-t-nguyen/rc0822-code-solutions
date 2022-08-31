var first = 34;
var second = 87;
var third = 45;

var maximumValue = Math.max(first, second, third);

console.log('maximumValue', maximumValue);

var heroes = ['spiderman', 'batman', 'superman', 'ironman'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero', randomHero);

var library =
[
  {
    title: 'James and the Giant Peach',
    author: 'Roald Dahl'
  },
  {
    title: 'Fantastic Mr. Fox',
    author: 'Roald Dahl'
  },
  {
    title: 'Matilda',
    author: 'Roald Dahl'
  }
];

var lastBook = library.pop();

console.log('lastBook', lastBook);

var firstBook = library.shift();

console.log('firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library array', library);

var fullName = 'Lisa Nguyen';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName', sayMyName);
