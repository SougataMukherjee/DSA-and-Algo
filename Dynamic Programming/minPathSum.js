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

//solution 2

function minPathSum(arr, i = 0, j = 0, memo = {}) {
  if (i >= arr.length || j >= arr[0].length) return Infinity;
  if (i === arr.length - 1 && j === arr[0].length - 1) return arr[i][j];

  let key = `${i},${j}`;
  if (memo[key] !== undefined) return memo[key];

  let rightPath = minPathSum(arr, i, j + 1, memo);
  let bottomPath = minPathSum(arr, i + 1, j, memo);

  memo[key] = arr[i][j] + Math.min(rightPath, bottomPath);
  return memo[key];
}
