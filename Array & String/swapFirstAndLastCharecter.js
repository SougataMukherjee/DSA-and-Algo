let str = "Test";
const length = str.length;
console.log(
  str.charAt(length - 1) + str.substring(1, length - 1) + str.charAt(0)
);

//

let arr = [5, 17, 11, 10, 12, 6],
  n = arr.length;
let temp = arr[0];
arr[0] = arr[n - 1];
arr[n - 1] = temp;
console.log(arr);
