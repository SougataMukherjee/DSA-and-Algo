const arr = [2, 4, 7, 8, 9];
const n = arr.length;
for (let i = 0, j = n - 1; i < j; i++, j--) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(arr);

//solution 2
function reverseInGroups(arr, k) {
  // code here
  const n = arr.length;
  for (let i = 0; i < n; i += k) {
    let left = i,
      right = Math.min(i + k - 1, n - 1);
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
}
