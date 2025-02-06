function helper(left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;

  return helper(left.left, right.right) && helper(left.right, right.left);
}
function isSymmetric(root) {
  if (!root) return true;
  return helper(root.left, root.right);
}
