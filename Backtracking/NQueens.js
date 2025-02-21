function nQueen(n) {
  let results = [];
  let col = new Array(n).fill(false);
  let diag1 = new Array(2 * n - 1).fill(false);
  let diag2 = new Array(2 * n - 1).fill(false);
  let board = [];

  function search(y) {
    if (y === n) {
      results.push([...board]);
      return;
    }
    for (let x = 0; x < n; x++) {
      if (col[x] || diag1[x + y] || diag2[x - y + n - 1]) continue;

      // Place the queen
      col[x] = diag1[x + y] = diag2[x - y + n - 1] = true;
      board.push(x + 1); // Storing 1-based index

      search(y + 1);

      // Backtrack
      col[x] = diag1[x + y] = diag2[x - y + n - 1] = false;
      board.pop();
    }
  }

  search(0);
  return results;
}
