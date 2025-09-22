//Reverse 1st half of the elements in an array
//Input: arr=[5,7,11,10,12,6] Output: [11,7,5,10,12,6]

let arr = [5, 7, 11, 10, 12, 6];
let n = arr.length;
//reverse all elements for(let i=0,j=n-1;i<n/2;i++,j--){
for (let i = 0, j = n / 2 - 1; i < n / 4; i++, j--) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
