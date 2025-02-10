function findMaxAverage(nums, k) {
  let sum = 0;

  // Calculate the sum of the first `k` elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  // Slide the window across the array
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}
