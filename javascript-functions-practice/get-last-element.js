/* exported getLastElement */
function getLastElement(array) {
  var lastElement = array.length - 1;
  var lastElement2 = array[lastElement];
  return lastElement2;
}

getLastElement(['foo', 'bar', 'baz']);
