function solve(arr, N) {
  // variable to store the final answer
  let ans = 0;

  // Iterate over all the elements and compare them
  // with the previous element
  for (let i = 1; i < N; i++) {
    if (arr[i - 1] > arr[i]) {
      ans += arr[i - 1] - arr[i];
      arr[i] = arr[i - 1];
    }
  }
  return ans;
}
