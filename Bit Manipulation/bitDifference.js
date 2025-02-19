function countBits(A, n) {
  const mod = 1000000007;
  let ans = 0;
  // traverse over all bits
  for (let i = 0; i < 31; i++) {
    let count = 0;

    // count number of elements with ith bit = 0
    for (let j = 0; j < n; j++) {
      if (A[j] & (1 << i)) count++;
    }

    // add to answer count * (n - count) * 2
    ans += (count * ((n - count) * 2)) % mod;
    if (ans >= mod) ans -= mod;
  }
  return ans;
}
