function MinSquares(n) {
  let dp = new Array(n + 1).fill(-1);

  function helper(rem) {
    if (rem === 0) {
      return 0;
    }
    if (rem < 0) {
      return Infinity;
    }
    let ans = dp[rem];
    if (ans !== -1) {
      return ans;
    }
    ans = Infinity;
    for (let i = 1; i * i <= rem; i++) {
      if (rem - i * i >= 0) {
        ans = Math.min(ans, 1 + helper(rem - i * i));
      }
    }
    dp[rem] = ans;
    return ans;
  }

  return helper(n);
}
