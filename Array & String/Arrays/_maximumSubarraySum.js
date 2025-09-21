function maximumSubarraySum(nums, k) {
  let maxSum = -Infinity;
  let n = nums.length;

  for (let i = 0; i <= n - k; i++) {
    let currentSum = 0;
    for (let j = 0; j < k; j++) {
      currentSum += nums[i + j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
