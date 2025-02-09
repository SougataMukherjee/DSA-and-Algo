function subArrayExists(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // Starting point of the subarray, and the sum is initialized with the first element of the subarray.
    let sum = arr[i];

    if (sum === 0) return true;

    for (let j = i + 1; j < n; j++) {
      // We are finding the sum until the jth index starting from the ith index.
      sum += arr[j];

      if (sum === 0) return true;
    }
  }
  return false;
}
