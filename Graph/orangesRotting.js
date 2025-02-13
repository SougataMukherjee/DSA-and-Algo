function isSafe(grid, i, j) {
  let n = grid.length;
  let m = grid[0].length;
  return i >= 0 && j >= 0 && i < n && j < m;
}
function orangesRotting(grid) {
  let days = 2;
  let flag = false;
  let n = grid.length;
  let m = grid[0].length;
  //traverse grid for getting rotten oranges
  while (true) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === days) {
          if (isSafe(grid, i + 1, j) && grid[i + 1][j] === 1) {
            grid[i + 1][j] = grid[i][j] + 1;
            flag = true;
          }
          if (isSafe(grid, i, j + 1) && grid[i][j + 1] === 1) {
            grid[i][j + 1] = grid[i][j] + 1;
            flag = true;
          }
          if (isSafe(grid, i - 1, j) && grid[i - 1][j] === 1) {
            grid[i - 1][j] = grid[i][j] + 1;
            flag = true;
          }
          if (isSafe(grid, i, j - 1) && grid[i][j - 1] === 1) {
            grid[i][j - 1] = grid[i][j] + 1;
            flag = true;
          }
        }
      }
    }
    if (!flag) {
      break;
    }
    flag = false;
    days++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        days = -1;
      }
    }
  }

  return days === -1 ? days : days - 2;
}
