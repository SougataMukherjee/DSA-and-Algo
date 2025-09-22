//you have X five-rupee coins and Y ten-rupee coins. If each chocolate costs Z rupees, find the maximum chocolates you can buy.
//Input: x = X, y = Y, z = Z
//Output: maximum number of chocolates that can be bought
function maxChocolates(x, y, z) {
  let totalMoney = x * 5 + y * 10; // Total amount in rupees
  let chocolates = 0;

  while (totalMoney >= z) {
    totalMoney -= z; // Buy a chocolate
    chocolates++; // Increase count
  }

  return chocolates; // Return the total chocolates bought
}
