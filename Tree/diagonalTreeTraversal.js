function diagonal(root) {
  let diagonalNode = [];
  let queue = [];
  let p;
  queue.push(root);
  while (queue.length != 0) {
    p = queue.shift();
    while (p) {
      if (p.left) queue.push(p.left);
      diagonalNode.push(p.key);
      p = p.right;
    }
  }
  return diagonalNode;
}
