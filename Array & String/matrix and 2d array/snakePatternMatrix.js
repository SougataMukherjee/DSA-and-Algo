function snakePattern(matrix) {
  let n = matrix.length;
  let output = new Array();

  //traversing over the rows.
  for (let i = 0; i < n; i++) {
    //if current row is even, we add the elements
    //in the list from left to right.
    if (i % 2 == 0) {
      for (let j = 0; j < n; j++) output.push(matrix[i][j]);
    }
    //else current row is odd and we add the elements
    //in the list from right to left.
    else {
      for (let j = n - 1; j >= 0; j--) output.push(matrix[i][j]);
    }
  }
  //returning the list.
  return output;
}
