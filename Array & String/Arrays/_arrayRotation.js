//Rotate an array to the left by d positions.
//Write a function to rotate the elements of an array to the left by d positions. After rotation, the order of the remaining elements should be preserved.

//Input:

//An integer array arr[]

//An integer d – the number of positions to rotate

//Output:

//The array rotated left by d positions
//Input:arr = [1, 2, 3, 4, 5, 6, 7]d = 2
//Output:[3, 4, 5, 6, 7, 1, 2]
function rotateArr(arr, d) {
  let n = arr.length;

  // Ensure d is within the range of array length
  d = d % n;

  // Slice and rearrange the array in place
  let temp = arr.slice(0, d);
  for (let i = 0; i < n - d; i++) {
    arr[i] = arr[i + d];
  }
  for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
  }
}

//if rotate array by one
function rotate(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i !== j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
  }
}
