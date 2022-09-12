/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}
