/* exported reverse */
function reverse(array) {
  var newarray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newarray.push(array[i]);
  }
  return newarray;
}
