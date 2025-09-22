//Given an array of integers, find the minimum sum and the maximum sum that can be obtained by adding all but one element of the array.
//I.P arr = [1,2,5,7,9]
//O.P minimum sum = 1 + 2 + 5 + 7 = 15
//O.P maximum sum = 2 + 5 + 7 + 9 = 23

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let min_sum = 0;

  let max_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      min_sum += arr[i];
    }
    if (i > 0) {
      max_sum += arr[i];
    }
  }

  console.log(min_sum, max_sum);
}
