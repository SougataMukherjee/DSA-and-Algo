function maxProfit(prices) {
  let bestBuy = prices[0]; // Minimum price so far
  let maxProfit = 0; // Maximum profit

  for (let i = 1; i < prices.length; i++) {
    // Update max profit if selling today gives a better profit
    maxProfit = Math.max(maxProfit, prices[i] - bestBuy);

    // Update the best price to buy
    bestBuy = Math.min(bestBuy, prices[i]);
  }

  return maxProfit;
}

//solution 2
function stockBuySell(arr) {
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    // If the current price is greater than the previous day's price, we make a profit
    if (arr[i] > arr[i - 1]) {
      maxProfit += arr[i] - arr[i - 1]; // Add profit to maxProfit
    }
  }

  return maxProfit;
}
