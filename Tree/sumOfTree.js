function sumOfTree(root) {
  if (!root) return 0;
  return root.val + sumOfTree(root.left) + sumOfTree(root.right);
}
