/* exported tail */
function tail(array) {
  var newarray = [];
  for (let i = 1; i < array.length; i++) {
    newarray.push(array[i]);
  }
  return newarray;
}
