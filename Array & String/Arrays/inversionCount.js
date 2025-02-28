function inversionCount(arr) {
  let n = arr.length;
  let invCount = 0;

  // Loop through the array
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // If the current element is greater than the next,
      // increment the count
      if (arr[i] > arr[j]) {
        invCount++;
      }
    }
  }
  return invCount;
}
