function rob(nums) {
  return helper(nums.length - 1, nums);
}
function helper(i, nums, memo = {}) {
  if (i < 0) return 0;
  if (i in memo) return memo[i];

  memo[i] = memo[i] = Math.max(
    helper(i - 1, nums, memo),
    nums[i] + helper(i - 2, nums, memo)
  );
  return memo[i];
}
