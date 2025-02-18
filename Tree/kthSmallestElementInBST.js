function kthSmallestRecur(root, cnt, k) {
  if (root === null) return -1;

  // Process left subtree.
  let left = this.kthSmallestRecur(root.left, cnt, k);

  // If kth smallest is found in left
  // subtree, then return it.
  if (left !== -1) return left;

  // increment node count
  cnt[0]++;

  // If curr node is kth smallest,
  // return it.
  if (cnt[0] === k) return root.data;

  // Else process the right subtree
  // and return its value.
  let right = this.kthSmallestRecur(root.right, cnt, k);
  return right;
}

// Function to find kth smallest value in BST.
function kthSmallest(root, k) {
  let cnt = [0];
  return this.kthSmallestRecur(root, cnt, k);
}
