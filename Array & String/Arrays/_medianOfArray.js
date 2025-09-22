//Median of an Array
//Given an array of integers, find the median value.
//If the array has an odd number of elements, the median is the middle element after sorting.
//If the array has an even number of elements, the median is the average of the two middle elements after sorting.
//I/P arr[] = [90, 100, 78, 89, 67]    O/P 89


function findMedian(arr) {
  let n = arr.length;

  // First we sort the array
  arr.sort((a, b) => a - b);

  // check for even case
  if (n % 2 !== 0) return arr[Math.floor(n / 2)];

  return (arr[Math.floor(n / 2) - 1] + arr[Math.floor(n / 2)]) / 2.0;
}
