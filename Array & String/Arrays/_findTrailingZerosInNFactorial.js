//Input: 5 Output: 1 (5! = 5 × 4 × 3 × 2 × 1 = 120)
function findTrailingZeros(n) {
  if (n < 0)
    // Negative Number Edge Case
    return -1;

  // Initialize result
  let count = 0;

  // Keep dividing n by powers of
  // 5 and update count
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);

  return count;
}
