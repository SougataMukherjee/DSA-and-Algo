let n = 153,
  r,
  sum = 0;
let size = n.length;
let temp = n;
while (n > 0) {
  r = n % 10;
  sum += r * r * r;
  n = Math.floor(n / 10);
}
if (temp === sum) {
  console.log("Armstrong Number");
} else {
  console.log("not");
}
