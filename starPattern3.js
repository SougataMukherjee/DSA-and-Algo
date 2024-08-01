let s = "";
for (let i = 4; i >= 1; i--) {
  for (let j = 4; j >= i; j--) {
    s += j;
  }
  s += "\n";
}
console.log(s);
