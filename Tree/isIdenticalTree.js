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

//solution 2
function isIdentical(r1, r2) {
  if (!r1 && !r2) return true;

  if (r1 && r2) {
    if (r1.data !== r2.data) return false;

    return (
      this.isIdentical(r1.left, r2.left) && this.isIdentical(r1.right, r2.right)
    );
  }

  return false;
}
