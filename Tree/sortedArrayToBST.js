function sortedArrayToBST(nums, left, right) {
  if (left > right) return null;

  let mid = left + Math.floor((right - left) / 2);
  let node = new Node(nums[mid]);

  // Recursively construct the left subtree and right subtree
  node.left = this.sortedArrayToBST(nums, left, mid - 1);
  node.right = this.sortedArrayToBST(nums, mid + 1, right);

  return node;
}

function sorted(nums) {
  if (nums.length === 0) return null;
  return this.sortedArrayToBSTUtil(nums, 0, nums.length - 1);
}
