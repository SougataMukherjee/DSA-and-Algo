function reverseQueue(q) {
  let stack = [];
  //push all elements of the queue into stack
  while (q.length > 0) {
    stack.push(q.shift());
  }
  //pop element from stack and push back into queue
  while (stack.length > 0) {
    q.push(stack.pop());
  }
  return q;
}
reverseQueue([1, 2, 3, 4, 5]);
