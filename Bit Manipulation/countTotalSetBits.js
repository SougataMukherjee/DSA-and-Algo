function countBits(N) {
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    let x = i;
    while (x) {
      if ((x & 1) == 1) cnt++;
      x /= 2;
    }
  }
  return cnt;
}
