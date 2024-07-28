let a = 10,
  b = 12,
  c = 15;
if ((a > b && a < c) || (a > c && a < b)) {
  console.log(a + " middle");
} else if ((b > a && b < c) || (b > c && b < a)) {
  console.log(b + " middle");
} else {
  console.log(c + " middle");
}
