//T.c=worce case O(n^2) and best case O(n)

//like we do certain number of passes,in every pass we compare adjacent elements and swap them if they are not in correct order
//give an example and give every iteration changes
//Pass/iteration 1:
//5 3 1 2 4 → 3 5 1 2 4 → 3 1 5 2 4 → 3 1 2 5 4 → 3 1 2 4 5
//Pass 2:
//3 1 2 4 5 → 1 3 2 4 5 → 1 2 3 4 5 → 1 2 3 4 5
//Pass 3: (check swap happen or not using flag)
//1 2 3 4 5 → 1 2 3 4 5 → 1 2 3 4 5
//Pass 4:
//1 2 3 4 5 → 1 2 3 4 5

function bubbleSort(arr = [5, 3, 1, 2, 4]) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // number of passes
    let flag = false; //if any swap happen
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if not in order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (flag === false) {
      return; //bcz array already sorted no need to go another pass
    }
  }
  return arr;
}
