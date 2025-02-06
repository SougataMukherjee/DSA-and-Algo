function reverseFirstElements(q, k) {
  if (k > q.length || k <= 0) {
    console.error("Invalid value of k");
    return q;
  }
  let stack = [];
  //push the first k elements of the queue into the stack
  for (let i = 0; i < k; i++) {
    stack.push(q.shift()); //in queue 45 and in stack 123
  }
  //push all elements from the stack back into the queue
  while (stack.length > 0) {
    q.push(stack.pop()); // in queue 45321
  }
  //rotate the remaining elements to the back of the queue
  let n = q.length;
  for (let i = 0; i < n - k; i++) {
    q.push(q.shift()); //on 1st rotate 53214 and 2nd rotate 32145
  }
  return q;
}
reverseFirstElements([1, 2, 3, 4, 5], 3);
