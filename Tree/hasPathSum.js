function hasPathSum(root, targetSum, sum = 0) {
  if (!root) {
    return false;
  }
  const s = sum + root.val;
  if (!root.left && !root.right && s === targetSum) return true;
  return (
    hasPathSum(root.left, targetSum, s) || hasPathSum(root.right, targetSum, s)
  );
}
