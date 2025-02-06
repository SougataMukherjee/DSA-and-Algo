let arr = [1, 2, 3, 3, 4, 5, 5];
let count = 0,
  item = 3;
for (let i = 0; i < arr.length; i++) {
  if (item === arr[i]) {
    count++;
  }
}
console.log(count);
