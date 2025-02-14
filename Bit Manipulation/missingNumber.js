function missingNumber(arr) {
  const n = arr.length + 1;
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i < n - 1; i++) {
    xor2 ^= arr[i];
  }

  // XOR all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    xor1 ^= i;
  }

  // Missing number is the XOR of xor1 and xor2
  return xor1 ^ xor2;
}
