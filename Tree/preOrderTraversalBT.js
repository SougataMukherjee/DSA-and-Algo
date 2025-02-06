function preOrderTraversal(root) {
  if (!root) return [];

  const res = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop(); // Process the current node
    res.push(node.val); // Add the current node's value to the result

    // Push right child first, so the left child is processed first
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return res;
}
