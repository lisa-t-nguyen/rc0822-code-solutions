/* exported sumAll */
function sumAll(numbers) {
  var result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  return result;
}
