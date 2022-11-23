/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  const second = queue.peek();
  if (first === undefined) return;
  if (second === undefined) return first;
  queue.enqueue(first);
  queue.dequeue();
  return second;
}
