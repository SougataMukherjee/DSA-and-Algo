function getMaximumGold(grid) {
  let row = grid.length;
  let col = grid[0].length;
  let maxGold = 0;
  const dfs = (i, j, currentGold) => {
    //base case : out of bound conditions
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] == 0) {
      return 0;
    }

    const goldInCurrentCell = grid[i][j];
    currentGold += goldInCurrentCell;

    //mark visited when enter on cell
    grid[i][j] = 0;

    //Update maximum gold collected
    maxGold = Math.max(maxGold, currentGold);

    //Explore all four possible directions ( down,up,right, left)
    dfs(i + 1, j, currentGold);
    dfs(i - 1, j, currentGold);
    dfs(i, j + 1, currentGold);
    dfs(i, j - 1, currentGold);

    //backtrack
    grid[i][j] = goldInCurrentCell;
  };
  //all the possiblilities
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      //specific dfs call
      if (grid[i][j] !== 0) {
        dfs(i, j, 0);
      }
    }
  }

  return maxGold;
}
