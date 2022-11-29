/* exported maxValue */

function maxValue(stack) {
  let num = stack.peek();
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    if (stack.peek() <= num) {
      stack.pop();
    } else {
      num = stack.pop();
    }
  }
  return num;
}
