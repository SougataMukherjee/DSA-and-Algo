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

//solution
function largest(arr) {
  let max = arr[0];

  // Traverse from second and compare
  // every element with current max
  for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];

  return max;
}

//solution for kth largest
function kLargest(arr, k) {
  arr.sort((a, b) => b - a);
  let res = arr.slice(0, k);
  return res;
}
