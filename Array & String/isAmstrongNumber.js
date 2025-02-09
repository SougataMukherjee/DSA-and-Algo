let n = 153,
  r,
  sum = 0;
let original = n;
console.log(n);
while (n > 0) {
  r = n % 10;
  sum = sum + r * r * r;
  n = Math.floor(n / 10);
}
if (original === sum) {
  console.log("armstrong number");
} else {
  console.log("not armstrong number");
}
