const arr = [2, 4, 7, 8, 9];
let sum = 0;
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (max < arr[i]) max = arr[i];
}

//solution 2
const sumTwo = arr.reduce((acc, num) => acc + num, 0);
