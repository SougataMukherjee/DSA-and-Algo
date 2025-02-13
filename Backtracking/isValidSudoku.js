function isValidSudoku(board) {
  const seen = new Set();

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] !== ".") {
        const b = `(${board[i][j]})`;
        if (
          !seen.add(b + i) ||
          !seen.add(j + b) ||
          !seen.add(Math.floor(i / 3) + b + Math.floor(j / 3))
        ) {
          return false;
        }
      }
    }
  }

  return true;
}
