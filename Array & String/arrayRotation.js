let arr = [1, 2, 0, 2, 1, 0],
  k = 3;
for (let i = 0; i < k; i++) {
  arr.unshift(arr.pop());
  console.log(`step${i + 1}`, arr);
}
