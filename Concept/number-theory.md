# Number Theory

## Modular Arithmetic

Modular arithmetic is widely used in number theory and cryptography.

```
(a + b) % m = ((a % m) + (b % m)) % m
(a * b) % m = ((a % m) * (b % m)) % m
(a - b) % m = ((a % m) - (b % m) + m) % m
(a / b) % m = ((a % m) * (b^-1 % m)) % m
```

### Example: Computing Factorial Modulo m

```js
let n = 55,
  m = 20;
let fact = 1;
for (let i = 2; i <= n; i++) {
  fact = (fact * i) % m;
}
console.log(fact);
```

## Binary Numbers

> JavaScript can store numbers up to 2^1024, but beyond 2^53(Number.MAX_SAFE_INTEGER), precision issues arise

### Bitwise Operators

| A   | B   | AND(&) | OR() | XOR(^) |
| --- | --- | ------ | ---- | ------ |
| 0   | 0   | 0      | 0    | 0      |
| 0   | 1   | 0      | 1    | 1      |
| 1   | 0   | 0      | 1    | 1      |
| 1   | 1   | 1      | 1    | 0      |

### Most Significant Bit (MSB) & Least Significant Bit (LSB)

#### Definition:

- **Most Significant Bit (MSB)**: The highest-order bit in a binary number, which holds the highest value. In an 8-bit number, it is the leftmost bit.
- **Least Significant Bit (LSB)**: The lowest-order bit in a binary number, which holds the lowest value. In an 8-bit number, it is the rightmost bit.

#### Example in JavaScript:

```js
function getMSB(num) {
  let msb = 1;
  while (msb <= num) {
    msb <<= 1;
  }
  return msb >> 1;
}

function getLSB(num) {
  return num & 1;
}

console.log(getMSB(18)); // Output: 16 (10010 -> MSB is 16)
console.log(getLSB(18)); // Output: 0 (10010 -> LSB is 0)
```

---

### Set Bit & Unset Bit

#### Definition:

- **Set Bit**: A bit that is set to `1`.
- **Unset Bit**: A bit that is set to `0`.

#### Example in JavaScript:

```js
function isBitSet(num, pos) {
  return (num & (1 << pos)) !== 0;
}

function setBit(num, pos) {
  return num | (1 << pos);
}

function unsetBit(num, pos) {
  return num & ~(1 << pos);
}

console.log(isBitSet(5, 0)); // Output: true (5 = 101, LSB is 1)
console.log(setBit(5, 1)); // Output: 7 (5 = 101, setting 2nd bit gives 111)
console.log(unsetBit(5, 2)); // Output: 1 (5 = 101, unsetting 3rd bit gives 001)
```

---

### Left Shift & Right Shift Operators

#### Definition:

- **Left Shift (`<<`)**: Shifts bits to the left, filling with `0`s on the right. Equivalent to multiplying by `2^n`.
- **Right Shift (`>>`)**: Shifts bits to the right, discarding bits on the right. Equivalent to integer division by `2^n`.

#### Example in JavaScript:

```js
let num = 5;
console.log(num << 1); // Output: 10 (5 * 2 = 10)
console.log(num >> 1); // Output: 2  (5 / 2 = 2)
```

#### Notes:

- Left shift is useful for fast multiplication by powers of 2.
  ```js
  let n = 5;
  console.log(n * 5 === n << 2); // Output: false (n * 5 ≠ n << 2, but works for powers of 2)
  ```
- Right shift is useful for fast integer division by powers of 2.
  ```js
  let n = 20;
  console.log(n / 4 === n >> 2); // Output: true (n / 4 = n >> 2)
  ```

### Left Shift and Right Shift Operators

```js
let a = 5;
console.log(a << 1); // Multiplies by 2 (10)
console.log(a >> 1); // Divides by 2 (2)
```

### Checking Bits

```js
function printBinary(num) {
  for (let i = 10; i >= 0; i--) {
    console.log((num >> i) & 1);
  }
}

function checkBit(a, i) {
  if ((a & (1 << i)) !== 0) console.log("Set Bit");
  else console.log("Not Set Bit");
}

checkBit(9, 4);
```

### Checking Odd/Even

```js
function checkOdd() {
  for (let i = 0; i < 8; i++) {
    printBinary(i);
    console.log(i & 1 ? "Odd" : "Even");
  }
}
```

### Multiplication and Division using Bitwise Operators

```js
let n = 5;
console.log(n << 2); // Multiplication by 4
console.log(n >> 2); // Division by 4
```

### XOR Properties

```js
x ^ y ^ (z == x) ^ z ^ (y == y) ^ x ^ z;
```

### Swap Two Numbers using XOR

```js
let a = 4,
  b = 6;
a = a ^ b;
b = b ^ a;
a = a ^ b;
console.log(a, b); // 6, 4
```

## Bit Masking

### Finding Common Elements using Bit Masking

```js
function commonElements(arr1, arr2) {
  let mask1 = 0,
    mask2 = 0;
  arr1.forEach((num) => (mask1 |= 1 << num));
  arr2.forEach((num) => (mask2 |= 1 << num));
  return mask1 & mask2;
}
console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));
```

### Generating Subsets using Bit Masking

```js
function generateSubsets(arr) {
  let n = arr.length;
  for (let i = 0; i < 1 << n; i++) {
    let subset = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) subset.push(arr[j]);
    }
    console.log(subset);
  }
}
generateSubsets([1, 2, 3]);
```

## GCD and LCM

```js
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```

## Binary Exponentiation

```js
function binaryExponentiation(a, b, m) {
  let result = 1;
  while (b > 0) {
    if (b & 1) result = (result * a) % m;
    a = (a * a) % m;
    b >>= 1;
  }
  return result;
}
console.log(binaryExponentiation(2, 10, 1000000007));
```

## Prime Factorization

```js
function primeFactors(n) {
  let factors = [];
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) factors.push(n);
  return factors;
}
console.log(primeFactors(100));
```

## Finding `(a^b) % m` Efficiently

```js
function modularExponentiation(a, b, m) {
  let res = 1;
  while (b > 0) {
    if (b % 2 === 1) res = (res * a) % m;
    a = (a * a) % m;
    b = Math.floor(b / 2);
  }
  return res;
}
console.log(modularExponentiation(10, 20, 1000000007));
```

## Modulo `10^9+7`

```js
const MOD = 1000000007;
```

## Sum of First N Natural Numbers Modulo K

```js
function sumModuloK(n, k) {
  return ((n * (n + 1)) / 2) % k;
}
console.log(sumModuloK(10, 7));
```

---
