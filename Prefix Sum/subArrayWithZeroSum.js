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

//solutions 2
function subArrayExists(arr) {
  const sumSet = new Set();

  // Traverse through array
  // and store prefix sums
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // If prefix sum is 0
    // or it is already present
    if (sum === 0 || sumSet.has(sum)) return true;

    sumSet.add(sum);
  }
  return false;
}
