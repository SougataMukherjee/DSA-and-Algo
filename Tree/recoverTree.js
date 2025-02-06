function recoverTree(root) {
  let prev = null,
    first = null,
    second = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left); //visit left subtree

    if (prev && node.val < prev.val) {
      if (!first) first = prev; // First incorrect node
      second = node; // Second incorrect node
    }
    prev = node; // Update `prev` to current node

    inorder(node.right); // Visit right subtree
  }

  inorder(root);

  // Swap values of first and second node
  if (first && second) {
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
  }
}
