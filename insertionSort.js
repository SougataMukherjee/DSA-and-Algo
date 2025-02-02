//Insertion Sort works by dividing the array into two parts: a sorted part and an unsorted part. Initially, the sorted part contains only the first element. The algorithm picks one element from the unsorted part at a time, finds its correct position within the sorted part, and inserts it. This process is repeated until the unsorted part becomes empty.
//T.c=worce case O(n^2) and best case O(n)

//Pass/iteration 1:(sorted and unsorted value sorted array made by shifting)
//5,3,1,2,4->3,5|,1,2,4
//Pass 2:
//3,5,1,2,4->1,3,5|,2,4
//Pass 3:
//1,3,5,2,4->1,2,3,5|,4
//Pass 4:
//1,2,3,5,4->1,2,3,4,5

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    // start from the second element bcz 1st element part of sorted list

    let j = i;
    while (j >= 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}
