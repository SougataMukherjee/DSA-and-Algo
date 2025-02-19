function LongestRepeatingSubsequence(s) {
  let n = s.length;

  // Create and initialize DP table
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }

  // Fill dp table (similar to LCS loops)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // If characters match and indexes are not same
      if (s[i - 1] == s[j - 1] && i != j) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      }
      // If characters do not match
      else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[n][n];
}
