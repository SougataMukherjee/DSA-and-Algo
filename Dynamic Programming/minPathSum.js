function minPathSum(grid) {
  let m = grid.length;
  let n = grid[0].length;

  // Initialize first column
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  // Initialize first row
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  // Fill DP table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      //take the minimal from upwords and leftwords
      let up = grid[i - 1][j];
      let left = grid[i][j - 1];
      grid[i][j] += Math.min(up, left);
    }
  }

  return grid[m - 1][n - 1];
}
