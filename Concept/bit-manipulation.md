# Bit Manipulation

- Why Bit Manipulation Matters in Programming?

1. Saving Memory
2. Making Algorithms Faster
3. Securing Information

Binary Representation

An n-bit integer is stored as n binary bits.
Example: 43 in 32-bit is 00000000000000000000000000101011.
Signed vs. Unsigned Integers

Signed (Two’s Complement): Range = −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1 (e.g., int in C++: -2³¹ to 2³¹ - 1).
Unsigned: Range = 0 to 2ⁿ - 1 (e.g., unsigned int in C++: 0 to 2³² - 1).
Negative numbers are stored using two’s complement (invert bits + 1).
Bitwise Operations

### AND (&):

x & y keeps bits that are 1 in both.

### OR (|):

x | y sets bits to 1 if at least one is 1.

### XOR (^):

x ^ y sets bits to 1 where values differ.

### NOT (~):

~x = -x - 1, inverts all bits.

### Bit Shifts

Left Shift (x << k): Multiplies by 2^k, appends k zeros.
Right Shift (x >> k): Divides by 2^k, removes k bits.

### Bit Masks

1 << k creates a mask with a 1 at bit position k.
Check if the k-th bit of x is set: x & (1 << k) != 0.

### Bitwise Operators Table

| Operator | Operation | Result |
| -------- | --------- | ------ | --- |
| **XOR**  | X ^ 0s    | X      |
| **XOR**  | X ^ 1s    | ~X     |
| **XOR**  | X ^ X     | 0      |
| **AND**  | X & 0s    | 0      |
| **AND**  | X & 1s    | X      |
| **AND**  | X & X     | X      |
| **OR**   | X         | 0s     | X   |
| **OR**   | X         | 1s     | 1s  |
| **OR**   | X         | X      | X   |
