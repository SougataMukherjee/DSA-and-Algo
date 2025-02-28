function divisibleSumPairs(n, k, ar) {
  let m = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        m++;
      }
    }
  }
  return m;
}
