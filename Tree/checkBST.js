//logic everything of everything of left <root and rightside >root and for every node we are giving lower and higher range assume -Infinity <node< Infinity and
//  first left recursion then right recursion

function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) {
    return false;
  }
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
