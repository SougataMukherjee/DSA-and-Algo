const snakesAndLadders = (board) => {
  const n = board.length;
  const arr = new Array(n * n);
  let i = n - 1,
    j = 0,
    index = 0,
    inc = 1;

  while (index < n * n) {
    arr[index++] = board[i][j];
    if (inc === 1 && j === n - 1) {
      inc = -1;
      i--;
    } else if (inc === -1 && j === 0) {
      inc = 1;
      i--;
    } else {
      j += inc;
    }
  }

  const visited = new Array(n * n).fill(false);
  const queue = [];
  let start = arr[0] > -1 ? arr[0] - 1 : 0;
  queue.push(start);
  visited[start] = true;
  let step = 0;

  while (queue.length) {
    let size = queue.length;
    while (size-- > 0) {
      let cur = queue.shift();
      if (cur === n * n - 1) return step;

      for (let next = cur + 1; next <= Math.min(cur + 6, n * n - 1); next++) {
        let dest = arr[next] > -1 ? arr[next] - 1 : next;
        if (!visited[dest]) {
          visited[dest] = true;
          queue.push(dest);
        }
      }
    }
    step++;
  }

  return -1;
};
