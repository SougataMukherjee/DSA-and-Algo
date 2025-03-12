function binaryToDecimal(num) {
  let decimal_num = 0;
  let base = 1;

  while (num > 0) {
    let rem = num % 10; //extract the last digit
    decimal_num += rem * base; // Convert binary to decimal using base power (2^0*rem +2^1*rem+...)
    num = Math.floor(num / 10); //remove the last digit
    base *= 2;
  }
  return decimal_num;
}
