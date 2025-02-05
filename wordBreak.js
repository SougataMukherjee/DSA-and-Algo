function wordBreak(s, wordDict) {
  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  let wordSet = new Set(wordDict);

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
