function maxMatrixSum(matrix) {
  let sum = 0;
  let minAbs = Infinity;
  let cntNeg = 0;

  for (let row of matrix) {
    for (let x of row) {
      minAbs = Math.min(minAbs, Math.abs(x));
      if (x < 0) {
        sum -= x; // Adding the absolute value (negating the negative)
        cntNeg++;
      } else {
        sum += x;
      }
    }
  }

  return cntNeg % 2 === 1 ? sum - 2 * minAbs : sum;
}
