//T.c=worce case O(n^2) and best case O(n^2)
//Pass/iteration 1:(find biggest value and swap)
//5 3 1 2 4 → 1 3 5 2 4
//Pass 2:
//1 3 5 2 4 → 1 2 5 3 4
//Pass 3:
//1 2 5 3 4 → 1 2 3 5 4
//Pass 4:
//1 2 3 5 4 → 1 2 3 4 5

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    //number of passes,n-1 because last element sorted automatically

    let minIndex = i; //assume 1st index minimum

    //find min element , i+1 because element before i are already sorted
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    //swap current and min element if minIndex===i dont swap
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
