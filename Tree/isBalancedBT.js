function isBalanced(root) {
  let isBal = true;

  function maxDepth(node) {
    if (!node) return 0;
    let leftSub = maxDepth(node.left);
    let rightSub = maxDepth(node.right);
    //if not a vaild balenced binary tree
    if (Math.abs(leftSub - rightSub) > 1) {
      isBal = false;
    }
    return Math.max(leftSub, rightSub) + 1;
  }
  maxDepth(root);
  return isBal;
}
