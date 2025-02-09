function heightOfBinaryTree(root) {
  function height(node) {
    if (!node) return 0;
    let left = height(node.left);
    let right = height(node.right);
    return Math.max(left, right) + 1;
  }

  return height(root);
}
