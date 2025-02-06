function maxAreaOfIsland(grid) {
  let count = 0,
    rows = grid.length,
    cols = grid[0].length;
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || !grid[i][j]) return 0;
    grid[i][j] = 0;
    return 1 + dfs(i - 1, j) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i, j + 1);
  };
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      if (grid[i][j]) {
        count = Math.max(count, dfs(i, j));
      }
  return count;
}
