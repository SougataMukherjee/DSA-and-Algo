function isSameTree(p, q) {
  //if both tree are empty
  if (!p && !q) {
    return true;
  }
  //if any one treeempty
  if (!p || !q) {
    return false;
  }
  //if both tree are not same value
  if (p.val !== q.val) {
    return false;
  }
  //if both tree's having same value and using (DFS) recursively to compare the values of corresponding nodes in both trees
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
}
