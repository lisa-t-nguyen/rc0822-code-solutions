/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  let index = 0;

  while (index < array.length) {
    newArray.push(array.slice(index, index + size));
    index += size;
  }

  return newArray;
}
