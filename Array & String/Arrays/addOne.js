function addOne(N) {
  let result = "";
  let carry = 1; // Start with 1 to add
  let i = N.length - 1;

  while (i >= 0 || carry) {
    let digit = (i >= 0 ? N[i] - "0" : 0) + carry;
    result = (digit % 10) + result; // Append new digit at the front
    carry = Math.floor(digit / 10); // Update carry
    i--;
  }

  console.log(result);
}
