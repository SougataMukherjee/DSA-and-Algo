function checkValidGrid(grid) {
  const dirx = [1, 2, -1, -2, 1, 2, -1, -2];
  const diry = [2, 1, 2, 1, -2, -1, -2, -1];

  function solve(i, j, n, move) {
    if (i < 0 || j < 0 || i >= n || j >= n || move !== grid[i][j]) {
      return false;
    }

    if (move === n * n - 1) {
      return true;
    }

    for (let k = 0; k < 8; k++) {
      const ni = i + dirx[k];
      const nj = j + diry[k];
      if (solve(ni, nj, n, move + 1)) {
        return true;
      }
    }

    return false;
  }

  const n = grid.length;
  return solve(0, 0, n, 0);
}
