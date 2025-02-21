function mergeArrays(a, b) {
  let i = a.length - 1;
  let j = 0;

  // Swap smaller elements from b[] with larger elements from a[]
  while (i >= 0 && j < b.length) {
    if (a[i] < b[j]) {
      i--;
    } else {
      [a[i], b[j]] = [b[j], a[i]];
      i--;
      j++;
    }
  }

  // Sort both arrays
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
}
