function maximizingXor(l, r) {
  let max = 0;
  for (let a = l; a <= r; a++) {
    for (let b = a; b <= r; b++) {
      max = Math.max(max, a ^ b);
    }
  }
  return max;
}
