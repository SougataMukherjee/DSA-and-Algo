function minimumCoins(coins, target) {
  // Sort the coins in descending order
  coins.sort((a, b) => b - a);

  let count = 0;
  let remaining = target;

  for (let coin of coins) {
    if (coin <= remaining) {
      const numCoins = Math.floor(remaining / coin); // Find how many coins of this denomination are needed
      count += numCoins; // Add to the total count
      remaining -= numCoins * coin; // Subtract the value from the remaining sum
    }

    if (remaining === 0) break;
  }

  if (remaining > 0) {
    return -1;
  }

  return count;
}
