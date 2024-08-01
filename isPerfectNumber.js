let n = 6,
  sum = 0;
for (let i = 1; i <= n / 2; i++) {
  if (n % i === 0) {
    sum += i;
  }
}
if (sum === n) {
  console.log("perfect");
} else {
  console.log("Not Perfect");
}
