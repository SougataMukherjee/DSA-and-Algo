function maxChocolates(x, y, z) {
  let totalMoney = x * 5 + y * 10; // Total amount in rupees
  let chocolates = 0;

  while (totalMoney >= z) {
    totalMoney -= z; // Buy a chocolate
    chocolates++; // Increase count
  }

  return chocolates; // Return the total chocolates bought
}
