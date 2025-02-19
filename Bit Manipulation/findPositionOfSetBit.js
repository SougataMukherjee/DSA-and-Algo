function findPosition(n) {
  if ((n & (n - 1)) !== 0 || n === 0) {
    return -1;
  }

  let pos = 1;
  while ((n & 1) === 0) {
    n = n >> 1;
    pos++;
  }

  return pos;
}
