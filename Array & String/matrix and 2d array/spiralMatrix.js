function spiralOrder(matrix) {
  let res = [];
  let l = 0;
  let r = matrix[0].length;
  let t = 0;
  let b = matrix.length;

  while (l < r && t < b) {
    //traverse left => right (1 2 3)
    for (let i = l; i < r; i++) {
      res.push(matrix[t][i]);
    }

    t++; // Move top boundary down
    //traverse top->bottom (3 6 9)
    for (let i = t; i < b; i++) {
      res.push(matrix[i][r - 1]);
    }

    r--; // Move right boundary left

    //traverse right to left(9 8 7)

    for (let i = r - 1; i >= l; i--) {
      res.push(matrix[b - 1][i]);
    }

    b--; // Move bottom boundary up
    //(7 4)
    for (let i = b - 1; i >= t; i--) {
      res.push(matrix[i][l]);
    }

    l++; // Move left boundary right
  }

  return res;
}
