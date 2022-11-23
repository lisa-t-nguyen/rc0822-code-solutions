/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  if (queue.peek() !== undefined) {
    for (let i = 0; i < index; i++) {
      const first = queue.dequeue();
      queue.enqueue(first);
    }
    const value = queue.dequeue();
    return value;
  }
}
