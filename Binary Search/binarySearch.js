function binarysearch(arr = [2, 4, 5, 7, 9], k = 7) {
  let start = 0,
    end = arr.length - 1,
    result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === k) {
      result = mid; // Store the found index
      end = mid - 1; // Continue searching in the left half for the smallest index
    } else if (k < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result;
}
