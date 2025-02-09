function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  function height(node) {
    if (!node) return 0;
    let left = height(node.left);
    let right = height(node.right);
    maxDiameter = Math.max(maxDiameter, left + right);
    return Math.max(left, right) + 1;
  }

  height(root);
  return maxDiameter;
}
