function multiply(num1, num2) {
  let num3 = BigInt(num1) * BigInt(num2); // Use BigInt for large numbers
  return num3.toString();
}
