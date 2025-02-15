function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  let total = 0;
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
    total += ans[i]; // Keep track of total count
  }
  return [ans, total];
}
