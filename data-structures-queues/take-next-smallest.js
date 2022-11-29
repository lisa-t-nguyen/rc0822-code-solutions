/* exported takeNextSmallest */
// when `queue` is empty returns undefined
// when `queue` has one value (not undefined)
//  return the value
//  remove the value from `queue` using dequeue
// when `queue` has at least two numbers - utilizing
// dequeue twice to pop off two numbers
//  compare first number to next number, if it is less
//  than or equal to the next number, return it
//  otherwise, if it is greater, move it to the back of
//  the queue until it finds one that is greater and
//  removes it using a while loop

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  let second = queue.peek();
  if (first === undefined) return;
  if (second === undefined) {
    return first;
  }
  while (second !== undefined) {
    if (first <= second) {
      return first;
    } else if (first > second) {
      queue.enqueue(first);
      first = queue.dequeue();
      second = queue.peek();
    }
  }
}
