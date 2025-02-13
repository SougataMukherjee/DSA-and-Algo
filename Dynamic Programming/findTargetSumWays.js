function findTargetSumWays(nums, target) {
  // initialize dp object
  const dp = {};

  const backtrack = (i, total) => {
    // Base case: if we've reached end of array
    if (i === nums.length) {
      // Return 1 if we've reached target, 0 otherwise
      return total === target ? 1 : 0;
    }

    // Check if this state has in cache
    const key = `${i},${total}`;
    if (key in dp) {
      return dp[key];
    }

    // calculate ways by adding and subtracting current number
    dp[key] =
      backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i]);

    return dp[key];
  };

  // start backtracking from index 0 with total 0
  return backtrack(0, 0);
}
