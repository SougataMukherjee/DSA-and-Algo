function findLength(nums1, nums2) {
  if (A.length < B.length) {
    [A, B] = [B, A];
  }

  const M = A.length,
    N = B.length;
  const dp = new Array(N + 1).fill(0); // Initialize the DP array
  let ans = 0;

  for (let i = 0; i < M; i++) {
    for (let j = N - 1; j >= 0; j--) {
      if (A[i] === B[j]) {
        dp[j + 1] = 1 + dp[j]; // Update dp if elements match
      } else {
        dp[j + 1] = 0; // Reset dp if they don't match
      }

      ans = Math.max(ans, dp[j + 1]); // Update the answer
    }
  }

  return ans;
}
