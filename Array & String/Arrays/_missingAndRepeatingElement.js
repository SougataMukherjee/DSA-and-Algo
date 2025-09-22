//Find the missing and repeating numbers in an unsorted array of integers from the range [1, n]
//I.P arr[] = [2, 2] O.P [2, 1]
function findTwoElement(arr) {
  let n = arr.length;
  let visited = new Array(n + 1).fill(false);
  let repeating = -1,
    missing = -1;

  for (let i = 0; i < n; i++) {
    if (visited[arr[i]]) {
      repeating = arr[i];
    } else {
      visited[arr[i]] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      missing = i;
      break;
    }
  }

  return [repeating, missing];
}
