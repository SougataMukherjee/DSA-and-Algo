let s = "";
let a = [
  [1, 2, 5],
  [3, 2, 4],
  [7, 1, 9],
];
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (i >= j) {
      s += a[i][j];
    } else {
      s += "0";
    }
  }
  s += "\n";
}
console.log(s);
