//Shuffle an array elements like [x1,y1,x2,y2,...xn,yn]
//Input: arr=[2,5,1,3,4,7] Output: [2,3,5,4,1,7]

let arr = [2, 5, 1, 3, 4, 7];
const n = arr.length / 2;
const res = [];
for (let i = 0; i < n; i++) {
  res.push(arr[i]);
  res.push(arr[i + n]);
}
console.log(res);
