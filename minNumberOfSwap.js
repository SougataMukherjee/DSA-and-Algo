let arr = [4, 3, 2, 1],
  count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== i + 1) {
    let temp = arr[i];
    arr[arr.indexOf(i + 1)] = temp;
    arr[i] = i + 1;
    count++;
  }
}
console.log(count);
