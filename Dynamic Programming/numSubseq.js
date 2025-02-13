function numSubseq(nums, target, memo = {}) {
  let n = nums.length;
  let key = n + "," + target;
  if (memo[key] !== undefined) return memo[key];

  if (target === 0) return true; // Base case: If target becomes 0, we found a valid sequence
  if (n === 0) return false; // Base case: If no elements left and target is not 0, return false

  // Either include the last element in the sum or exclude it
  memo[key] =
    numSubseq(nums, target - nums[n - 1], memo, n - 1) ||
    numSubseq(nums, target, memo, n - 1);

  return memo[key];
}
