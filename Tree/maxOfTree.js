function max(root) {
  if (root === null) {
    return Number.MIN_SAFE_INTEGER;
  }

  let lmax = max(root.left);
  let rmax = max(root.right);

  let maxChild = lmax > rmax ? lmax : rmax;

  return root.val > maxChild ? root.val : maxChild;
}
