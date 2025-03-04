function sumXor(n) {
  if (n === 0n) return 1n; // Use BigInt for large numbers

  let zeros = 0n;
  let num = BigInt(n); // Convert to BigInt

  while (num > 0n) {
    if ((num & 1n) === 0n) zeros++; // Count number of 0s in binary representation
    num >>= 1n; // Right shift to process the next bit
  }

  return 2n ** zeros;
}
