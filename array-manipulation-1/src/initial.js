/* exported initial */
function initial(array) {
  var newarray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newarray.push(array[i]);
  }
  return newarray;
}
