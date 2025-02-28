function squaresInMatrix(m, n) {
  if (n < m) [m, n] = [n, m]; // Swap if needed

  let ans =
    (BigInt(m) * BigInt(m + 1) * BigInt(2 * m + 1)) / BigInt(6) +
    (BigInt(n - m) * BigInt(m) * BigInt(m + 1)) / BigInt(2);

  return ans;
}
