/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const top = stack.peek();
  if (stack.peek() === undefined) return;
  stack.pop();
  stack.push(value);
  stack.push(top);
}
