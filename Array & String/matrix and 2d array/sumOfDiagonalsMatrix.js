let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sum = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      sum += a[i][j];
    }
  }
}
console.log(sum);
//NB for opposite diagonal if (i + j === 2)
