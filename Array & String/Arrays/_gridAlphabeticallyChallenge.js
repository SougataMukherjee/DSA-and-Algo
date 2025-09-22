//Rearrange each row of a square grid alphabetically. Check if all columns are also in ascending order; return "YES" if true, otherwise return "NO".
//grid = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]  O/P "YES"


function gridChallenge(grid) {
  grid = grid.map((row) => row.split("").sort().join("")); // Sort each row alphabetically

  for (let col = 0; col < grid[0].length; col++) {
    for (let row = 1; row < grid.length; row++) {
      if (grid[row][col] < grid[row - 1][col]) return "NO";
    }
  }

  return "YES";
}
