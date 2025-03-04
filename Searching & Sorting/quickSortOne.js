function quickSort(arr) {
  let left = [],
    equal = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) left.push(arr[i]);
    else if (arr[i] > arr[0]) right.push(arr[i]);
    else equal.push(arr[i]);
  }

  return [...left, ...equal, ...right];
}
