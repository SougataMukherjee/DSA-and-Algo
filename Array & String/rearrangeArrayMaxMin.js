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
