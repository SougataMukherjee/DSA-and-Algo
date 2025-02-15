function maximumSumSubarray(arr, k) {
  let n = arr.length;
  if (n < k) return -1; // Edge case: If k is larger than array size

  let sum = 0,
    maxSum = 0;

  // Compute sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  maxSum = sum;

  // Sliding window technique
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k]; // Slide the window
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}
