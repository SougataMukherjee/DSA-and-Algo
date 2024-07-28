let num = -312;
let max = 2 ** 31 - 1; // safe integer limit.

if (Math.abs(num) > max) {
  console.log(0);
} else {
  let sign = num >= 0 ? "" : "-"; // Preserve the sign of the number.
  let rev = parseInt(
    sign + Math.abs(num).toString().split("").reverse().join("")
  );
  console.log(rev);
}
