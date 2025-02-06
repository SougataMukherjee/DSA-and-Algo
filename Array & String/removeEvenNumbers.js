const arr = [2, 4, 6, 8, 9];
for (let i = arr.length; i >= 0; i--) {
  if (arr[i] % 2 === 0) arr.splice(i, 1);
}
console.log(arr);
