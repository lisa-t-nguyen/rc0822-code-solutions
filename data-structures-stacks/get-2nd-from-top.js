/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const first = stack.pop();
  const second = stack.peek();
  if (first === undefined) return;
  stack.push(first);
  return second;
}
