function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
function isSubtree(root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  //Recursively check both left and right subtrees of root to see if any of them contain a subtree
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
