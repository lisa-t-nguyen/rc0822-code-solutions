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
  var lastElement = array.length - 1;
  var lastArrayValue = array[lastElement];
  return lastArrayValue;
}

var array = ['propane', 'and', 'propane', 'accessories'];

var arrayLastElement = getLastElement(array);

console.log('getLastElementResult', arrayLastElement);
