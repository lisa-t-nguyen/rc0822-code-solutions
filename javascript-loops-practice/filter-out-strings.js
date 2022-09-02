/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      array.push(values[i]);
    }
  }
  return array;
}
