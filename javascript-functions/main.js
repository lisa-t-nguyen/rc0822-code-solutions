function convertMinutesToSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult', convertMinutesToSecondsResult);

function greet(name) {
  var sum = 'Hey,' + ' ' + name;
  return sum;
}

var nameResult = greet('Beavis');

console.log('nameResult', nameResult);

function getArea(width, height) {
  var sum = width * height;
  return sum;

}

var getAreaResult = getArea(17, 42);

console.log('getAreaResult', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var person = {
  firstName: 'Lisa',
  lastName: 'Nguyen'
};

var getFirstNameResult = getFirstName(person);

console.log('getFirstNameResult', getFirstNameResult);

function getLastElement(array) {
  return array[3];
}

var array = ['propane', 'and', 'propane', 'accessories'];

var getLastElementResult = getLastElement(array);

console.log('getLastElementResult', getLastElementResult);
