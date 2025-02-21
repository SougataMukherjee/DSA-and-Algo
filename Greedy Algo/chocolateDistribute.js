function findMinDiff(arr, m) {
  let n = arr.length;

  // Sort the array in ascending order to arrange elements for contiguous
  // selection
  arr.sort(function (a, b) {
    return a - b;
  });

  // Initialize start and end pointers to mark the indices of the subarray with
  // minimum difference
  let start = 0;
  let end = 0;

  // Initialize minDiff with a large value to keep track of the minimum difference
  // found
  let minDiff = Number.MAX_SAFE_INTEGER;

  // Loop to find the minimum difference in subarrays of size `m`
  for (let i = 0; i + m - 1 < n; i++) {
    // Calculate the difference between the maximum and minimum elements in the
    // current subarray of size `m`
    let diff = arr[i + m - 1] - arr[i];

    // If this difference is smaller than the current minDiff, update minDiff
    // and set new start and end indices
    if (minDiff > diff) {
      minDiff = diff;
      start = i;
      end = i + m - 1;
    }
  }

  // Return the difference between the selected maximum and minimum values in the
  // subarray with minimum difference
  return arr[end] - arr[start];
}
