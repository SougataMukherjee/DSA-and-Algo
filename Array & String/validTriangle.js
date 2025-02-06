let a1 = 9,
  a2 = 40,
  a3 = 41;
let s, area;
if (
  a1 > 0 &&
  a2 > 0 &&
  a3 > 0 &&
  a1 + a2 > a3 &&
  a1 + a3 > a2 &&
  a2 + a3 > a1
) {
  s = (a1 + a2 + a3) / 2;
  area = Math.sqrt(s * (s - a1) * (s - a2) * (s - a3));
  console.log("valid", area);
} else {
  console.log("invalid");
}
