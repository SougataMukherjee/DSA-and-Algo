function findMedian(arr) {
  let n = arr.length;

  // First we sort the array
  arr.sort((a, b) => a - b);

  // check for even case
  if (n % 2 !== 0) return arr[Math.floor(n / 2)];

  return (arr[Math.floor(n / 2) - 1] + arr[Math.floor(n / 2)]) / 2.0;
}
