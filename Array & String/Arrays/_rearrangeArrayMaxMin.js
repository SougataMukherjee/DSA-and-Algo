//Rearrange a sorted array into a wave array in-place, ensuring the lexicographically smallest order such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5] ..
//I.P arr[] = [1, 2, 3, 4, 5, 6]   O.P [2, 1, 4, 3, 6, 5]

function rearrange(arr) {
  // Auxiliary array to hold modified array
  let temp = new Array(arr.length);

  // Indexes of smallest and largest elements
  // from remaining array.
  let small = 0,
    large = arr.length - 1;

  // To indicate whether we need to copy remaining
  // largest or remaining smallest at next position
  let flag = true;

  // Store result in temp[]
  for (let i = 0; i < arr.length; i++) {
    if (flag) temp[i] = arr[large--];
    else temp[i] = arr[small++];

    flag = !flag;
  }

  // Copy temp[] to arr[]
  for (let i = 0; i < arr.length; i++) arr[i] = temp[i];
}
let arr = [1, 2, 3, 4, 5, 6];
rearrange(arr);
for (let i = 0; i < arr.length; i++) console.log(arr[i] + " ");
