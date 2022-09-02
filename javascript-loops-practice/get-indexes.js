/* exported getIndexes */

// creating a function that is being defined with getIndexes with one parameter (array)
// a new array containing the indexes from the input array parameter will be returned
// so if you input ['meow', 'woof'] you will be returned with [0, 1] in the new array
// in order to have it return in a new array, assign an empty array to a new var
// afterwards, write a for loop in which it will look at all items in the length of the input array
// have empty array var assigned to new input array
// then, it will make note of that input array length, and return the index of each item into the new empty array var

function getIndexes(array) {
  var newarray = [];
  for (let i = 0; i < array.length; i++) {
    newarray.push(i);
  }
  return newarray;
}
