//Note: find the Inversion Count in an array
//Input: arr[] = [2, 4, 1, 3, 5] Output: 3 (2, 1), (4, 1), (4, 3)

function inversionCount(arr) {
  // your code here
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
