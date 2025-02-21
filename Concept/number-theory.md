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

### Bitwise Operators

| A   | B   | AND(&) | OR() | XOR(^) |
| --- | --- | ------ | ---- | ------ |
| 0   | 0   | 0      | 0    | 0      |
| 0   | 1   | 0      | 1    | 1      |
| 1   | 0   | 0      | 1    | 1      |
| 1   | 1   | 1      | 1    | 0      |

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

## Bit Manipulation Tricks

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

These JavaScript implementations cover fundamental number theory concepts efficiently using bitwise operations and modular arithmetic.
