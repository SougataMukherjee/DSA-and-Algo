function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function sortZeroesAndOnes(arr) {
  // From left to right, check if left is 1 and right is 0, then swap; else adjust pointers
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] === 1 && arr[right] === 0) {
      swap(arr, left, right);
      left++;
      right--;
    }
    if (arr[left] === 0) {
      left++;
    }
    if (arr[right] === 1) {
      right--;
    }
  }
  return arr;
}

//for sort 0's 1's and 2's
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sort012(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      this.swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      // arr[mid] === 2
      this.swap(arr, mid, high);
      high--; // Move high left, but do not increase mid
    }
  }
  return arr;
}
