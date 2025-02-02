function searchMatrix(matrix, target) {
  let row = 0; // Start from the first row
  let col = matrix[0].length; // Start from the last column

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true; // Target found, return true
    }
    if (matrix[row][col] < target) {
      row++; // Move down if the current element is smaller than the target
    } else {
      col--; // Move left if the current element is greater than the target
    }
  }

  return false;
}
