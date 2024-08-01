let n = 3,
  str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    str += "";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += k;
  }
  str += "\n";
}
console.log(str);
