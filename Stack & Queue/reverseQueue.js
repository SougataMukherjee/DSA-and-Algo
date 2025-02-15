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

//solution 2
function reversedQueue(q) {
  let stack = [];

  // Push elements from the queue into the stack and remove them from the queue
  while (!q.empty()) {
    stack.push(q.front_ele());
    q.pop();
  }

  // Create a new queue to store the reversed elements
  let reversed = new Queue();

  // Push elements back into the queue from the stack
  while (stack.length > 0) {
    reversed.push(stack.pop());
  }

  // Return the reversed queue
  return reversed;
}
