function modifyQueue(q, k) {
  // your code here
  let s = [];
  let qq = new Queue();

  // we pop first k elements from queue and push it in the stack.
  while (k--) {
    let a = q.front_ele();
    q.pop();
    s.push(a);
  }
  // while stack is not empty, we push the elements into the new queue.
  while (s.length > 0) {
    let a = s[s.length - 1];
    s.pop();
    qq.push(a);
  }
  // then we add rest of the elements of original queue to the new queue.
  while (!q.empty()) {
    let a = q.front_ele();
    q.pop();
    qq.push(a);
  }
  // returning the new queue.
  return qq;
}
