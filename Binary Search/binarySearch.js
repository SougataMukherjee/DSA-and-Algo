let arr = [2, 4, 5, 7, 9],
  item = 7;
let start = 0,
  end = arr.length - 1;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === item) {
    console.log("item found at", mid);
  }

  if (item < arr[mid]) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
