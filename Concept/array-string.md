# Array

An **array** is a linear data structure used to store multiple elements.
It is a collection of elements of the same data type stored at contiguous memory locations.

### Types of Arrays

1. Fixed Size Array
2. Dynamic Sized Array
3. 1-Dimensional Array
4. 2-Dimensional Array
   - A 2-dimensional array, known as a matrix, is arranged in rows and columns.

### Initialization of Array

```js
let arr = [10, 20, 30];
let arr2 = ["c", "d", "e"];
let arr3 = [28.5, 36.5, 40.2];
let arr4 = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11],
];
```

### Array Traversal

1. **Using a for loop**

```js
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

2. **Using forEach**

```js
arr.forEach((element) => console.log(element));
```

3. **Using for...of loop**

```js
for (let element of arr) {
  console.log(element);
}
```

# String

A **string** is a sequence of characters.

### Creation and Initialization

```js
let s = "Hello, World!";
```

### String Methods

- `length`: Returns the length of the string
- `toUpperCase()`: Converts string to uppercase
- `toLowerCase()`: Converts string to lowercase
- `slice()`: Extracts part of a string
- `replace()`: Replaces part of a string
- `split()`: Splits string into an array

Example:

```js
let str = "Hello, Sougata";
console.log(str.length); // 14
console.log(str.toUpperCase()); // "HELLO, SOUGATA"
console.log(str.slice(0, 5)); // "Hello"
```

# Object

An **object** is a collection of key-value pairs where each key is a property.

### Initialization

```js
let bio = {
  name: "Sam",
  address: "J.P.Nagar",
};
```

### Accessing Properties

```js
console.log(bio.name); // "Sam"
console.log(bio["address"]); // "J.P.Nagar"
```

### Object Methods

- `Object.keys()`: Returns an array of keys
- `Object.values()`: Returns an array of values
- `Object.entries()`: Returns an array of [key, value] pairs

Example:

```js
console.log(Object.keys(bio)); // ["name", "address"]
console.log(Object.values(bio)); // ["Sam", "J.P.Nagar"]
```

## Math Methods

### `Math.ceil()`

Rounds a number **UP** to the nearest integer.

```js
console.log(Math.ceil(0.6)); // 1
console.log(Math.ceil(1.2)); // 2
```

### `Math.floor()`

Rounds a number **DOWN** to the nearest integer.

```js
console.log(Math.floor(0.6)); // 0
console.log(Math.floor(1.2)); // 1
```

### `Math.abs()`

Returns the **absolute value** of a number.

```js
console.log(Math.abs(1.2)); // 1.2
console.log(Math.abs(-1.2)); // 1.2
console.log(Math.abs(null)); // 0
```

## BigInt

**BigInt** values represent integers which are too high or too low.

```js
const a = BigInt(9007199254740991);
console.log(a); // 9007199254740991n
```

## Infinity

- `Number.POSITIVE_INFINITY`: Represents the largest positive value (Infinity)
- `Number.NEGATIVE_INFINITY`: Represents the smallest negative value (-Infinity)

```js
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```
