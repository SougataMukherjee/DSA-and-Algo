let arr = [0, 1, 2, 3, 5];
let newArr = arr.sort((a, b) => a - b);
console.log(newArr[newArr.length - 2]);

// solution 2
function kthSmallest(arr, N, K) {
  arr.sort((a, b) => a - b);
  return arr[N - K]; // for kth smallest return arr[K - 1];
}
