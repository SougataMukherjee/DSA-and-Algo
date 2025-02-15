function mirror(node) {
  if (!node) return;

  // Swap left and right subtrees using a temporary variable
  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  // Recursively mirror left and right subtrees
  mirror(node.left);
  mirror(node.right);
}
