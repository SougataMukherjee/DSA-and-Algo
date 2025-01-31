function uniquePaths(m, n) {
  const arr = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] = arr[j - 1] + arr[j];
    }
  }
  return arr[arr.length - 1];
}
