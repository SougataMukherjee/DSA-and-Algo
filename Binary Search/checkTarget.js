function checkTarget(arr, st, end, target) {
  if (st > end) return false;
  let mid = Math.floor((st + end) / 2);
  if (target === arr[mid]) return true;
  else if (target < arr[mid]) return checkTarget(arr, st, mid - 1, target);
  else return checkTarget(arr, mid + 1, end, target);
}
console.log(checkTarget([2, 4, 6, 7, 8], 0, 4, 7));
