function coinChange(coins, amount) {
  // Initialize dp array with amount + 1
  const dp = new Array(amount + 1).fill(amount + 1);
  // Base case: 0 amount needs 0 coins
  dp[0] = 0;

  //traverse amount with coins
  for (let a = 1; a <= amount; a++) {
    for (let c = 0; c < coins.length; c++) {
      // If the coin value is less than or equal to current amount
      if (a - coins[c] >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - coins[c]]); //dp[4]=1+dp[2]
      }
    }
  }

  // Return -1 if amount can't be made, otherwise return minimum coins needed
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}
