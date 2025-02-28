function diagonalDifference(arr) {
  let primarySum = 0,
    secondarySum = 0;

  for (let i = 0; i < arr.length; i++) {
    primarySum += arr[i][i]; // Primary diagonal (i == j)
    secondarySum += arr[i][arr.length - 1 - i]; // Secondary diagonal (i + j == arr.length - 1)
  }

  return Math.abs(primarySum - secondarySum);
}
