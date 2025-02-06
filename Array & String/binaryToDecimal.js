function binaryToDecimal(num) {
  let decimal_num = 0;
  let base = 1;

  while (num > 0) {
    let rem = num % 10;
    decimal_num += rem * base;
    num = Math.floor(num / 10);
    base *= 2;
  }
  return decimal_num;
}
