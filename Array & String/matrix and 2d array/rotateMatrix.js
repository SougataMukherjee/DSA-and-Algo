let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.table(mat[i][j]);
  }
  console.log("\n");
}

console.log("Rotate by 90 degrees");
for (let i = 0; i < 3; i++) {
  for (let j = 2; j >= 0; j--) {
    console.table(mat[j][i]);
  }
  console.log("\n");
}
