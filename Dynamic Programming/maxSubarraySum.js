function maxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currSum = 0;

  for (const n of arr) {
    currSum = Math.max(n, currSum + n);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
