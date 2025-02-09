let n = 1234;
let ev = 0,
  od = 0;
while (n > 0) {
  let rem = n % 10;
  if (rem % 2 === 0) {
    ev++;
  } else {
    od++;
  }
  n = Math.floor(n / 10);
}
console.log(ev, od);
