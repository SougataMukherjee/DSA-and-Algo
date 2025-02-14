//better approach
function getSecondLargest(arr) {
  let n = arr.length;

  arr.sort((a, b) => a - b);

  // start from second last element as last element is the largest
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== arr[n - 1]) {
      return arr[i];
    }
  }

  return -1;
}

// solution 2
function kthSmallest(arr, N, K) {
  arr.sort((a, b) => a - b);
  return arr[N - K]; // for kth smallest return arr[K - 1];
}
