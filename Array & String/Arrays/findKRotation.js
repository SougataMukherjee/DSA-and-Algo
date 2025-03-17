// Input: arr = [5, 1, 2, 3, 4]  Output: 1 (right rotate to became [1,2,3,4,5])

function findKRotation(arr) {
  let n = arr.length;
  let k = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      k = i;
      break;
    }
  }

  return k;
}
