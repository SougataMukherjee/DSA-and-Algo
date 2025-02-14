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

//solutions 2
function preorderUtil(root, res) {
  //preorder traversal works on Root Left Right.

  //if root is null then we simply return.
  if (root === null) return;

  //first, we store the data at root in a list.
  res.push(root.data);
  //then we call the recursive function for left subtree.
  this.preorderUtil(root.left, res);
  //then we call the recursive function for right subtree.
  this.preorderUtil(root.right, res);
}
function preorder(root) {
  let res = [];
  this.preorderUtil(root, res);
  //returning the list.
  return res;
}
