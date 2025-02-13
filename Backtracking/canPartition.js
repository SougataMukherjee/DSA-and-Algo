function canPartition(nums, i = 0, sum1 = 0, sum2 = 0, memo = {}) {
  const key = `${i}-${sum1}-${sum2}`;
  if (key in memo) return memo[key]; // Check if the result is already computed

  if (i >= nums.length) {
    return sum1 === sum2; // Check if both subsets have equal sum
  }

  // Recursive calls to include current number in either subset
  const result =
    canPartition(nums, i + 1, sum1 + nums[i], sum2, memo) ||
    canPartition(nums, i + 1, sum1, sum2 + nums[i], memo);

  // Store the result in the memo object and return
  memo[key] = result;
  return result;
}
