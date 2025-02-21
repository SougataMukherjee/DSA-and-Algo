function divide(a, b) {
  // Calculate sign of divisor i.e.,
  // sign will be negative only if
  // either one of them is negative
  // otherwise it will be positive
  let sign = (a < 0) ^ (b < 0) ? -1 : 1;

  // Update a and b to positive
  a = Math.abs(a);
  b = Math.abs(b);

  // Initialize the quotient
  let quotient = 0,
    temp = 0;

  // Test down from the highest bit and
  // accumulate the tentative value for
  // valid bit
  for (let i = 31; i >= 0; --i) {
    if (temp + b * Math.pow(2, i) <= a) {
      temp += b * Math.pow(2, i);
      quotient += Math.pow(2, i);
    }
  }

  return quotient * sign;
}
