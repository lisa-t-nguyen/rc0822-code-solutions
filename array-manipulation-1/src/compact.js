/* exported compact */
function compact(array) {
  var newarray = [];
  for (let i = 0; i < array.length; i++) {
    var currentElement = array[i];

    var isNotNull = currentElement !== null;
    var isNotFalse = currentElement !== false;
    var isNotANumber = !Number.isNaN(currentElement);
    var isNotZero = currentElement !== 0;
    var isNotUndefined = currentElement !== undefined;
    var isEmptyString = currentElement !== '';

    if (isNotNull && isNotFalse && isNotANumber && isNotZero && isNotUndefined && isEmptyString) {
      newarray.push(currentElement);
    }
  }
  return newarray;
}
