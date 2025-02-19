function diagonalSum(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (i == j || i + j == mat.length - 1) sum += mat[i][j];
    }
  }
  return sum;
}
