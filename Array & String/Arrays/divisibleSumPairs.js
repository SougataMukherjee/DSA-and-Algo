//Given an array of integers and a positive integer k,
// find the number of pairs (i, j) where i < j and the sum of ar[i] + ar[j] is divisible by k.
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
