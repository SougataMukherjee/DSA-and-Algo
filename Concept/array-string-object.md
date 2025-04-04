### Primitive vs Non-Primitive Types

| Feature    | Primitive Types                                                        | Non-Primitive Types                                           |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| Definition | Basic data types that store single values                              | Complex data structures that store multiple values or objects |
| Data Types | `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt` | `Object`, `Array`, `Function`, `Date`, `RegExp`               |
| Mutability | Immutable (cannot be changed)                                          | Mutable (can be modified)                                     |
| Stored in  | Stack memory                                                           | Heap memory                                                   |
| Example    | `let a = 10; let b = "Hello";`                                         | `let obj = {name: "John"}; let arr = [1, 2, 3];`              |

---

### Undefined vs Null in JavaScript

#### Undefined:

- A variable is `undefined` when it has been declared but has not been assigned a value.
- Default value assigned to uninitialized variables.
- Functions that do not explicitly return a value return `undefined`.
- Accessing object properties or array elements that do not exist returns `undefined`.
- Example:

```javascript
let x;
console.log(x); // undefined

function test() {}
console.log(test()); // undefined

let obj = {};
console.log(obj.property); // undefined
```

#### Null:

- `null` is an intentional absence of any object value.
- It is a primitive value that represents the absence of a value.
- Unlike `undefined`, `null` is explicitly assigned by the developer.
- Example:

```javascript
let y = null;
console.log(y); // null

let person = { name: "Alice", age: null };
console.log(person.age); // null
```

### Key Differences:

| Feature        | Undefined                             | Null                             |
| -------------- | ------------------------------------- | -------------------------------- |
| Type           | Primitive                             | Primitive                        |
| Default Value? | Yes (for uninitialized variables)     | No (must be assigned explicitly) |
| Use Case       | Missing value, uninitialized variable | Intentional absence of value     |
| Typeof         | `undefined`                           | `object` (historical bug in JS)  |

---

### Implicit vs Explicit Type Conversion

| Feature       | Implicit Type Conversion                 | Explicit Type Conversion                  |
| ------------- | ---------------------------------------- | ----------------------------------------- |
| Definition    | JavaScript automatically converts types  | Manually converting types using functions |
| Also Known As | Type Coercion                            | Type Casting                              |
| Example       | `"5" + 2 → `"52"` (String concatenation) | `Number("5") + 2 → 7`                     |
| Control       | Done automatically by JavaScript         | Done explicitly by the developer          |

---

### Pass by Value vs Pass by Reference

| Feature           | Pass by Value                                     | Pass by Reference                                                         |
| ----------------- | ------------------------------------------------- | ------------------------------------------------------------------------- |
| Definition        | A copy of the value is passed                     | A reference to the actual data is passed                                  |
| Affects Original? | No, changes do not affect the original value      | Yes, changes affect the original object                                   |
| Data Types        | Primitive types (`Number`, `String`, etc.)        | Non-primitive types (`Object`, `Array`, `Function`)                       |
| Example           | `let x = 10; let y = x; y = 20; // x is still 10` | `let obj1 = { a: 10 }; let obj2 = obj1; obj2.a = 20; // obj1.a is now 20` |

![linear](../img/linear.png) <br>

# Array ✔

An **array** is a <mark>linear data structure</mark> used to store multiple elements.
It is a collection of elements of the <mark>same data type</mark> stored at contiguous memory locations.
![array](../img/array.png) <br>

### Types of Arrays

1. Fixed Size Array
2. Dynamic Sized Array
3. 1-Dimensional Array
4. 2-Dimensional Array
   - A 2-dimensional array, known as a matrix, is arranged in rows and columns.
     ![2darray](../img/2-D-array.png) <br>

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

### Postfix (i++) vs. Prefix (++i) Increment

Both ++i and i++ increase a variable by 1, but they behave differently in expressions.

```js
i++; // Post-increment (returns value before incrementing)
++i; // Pre-increment (returns value after incrementing)
```

### Example

```js
let x = 5;
console.log(x++); // 5 (returns x, then increments)
console.log(x); // 6

let y = 5;
console.log(++y); // 6 (increments y, then returns)
console.log(y); // 6
```

### Difference Between `for` and `while` Loops 🚀

| Feature         | `for` Loop                                           | `while` Loop                                                                  |
| --------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| Syntax          | `for(initialization; condition; update) { // code }` | `while(condition) { // code }`                                                |
| Use Case        | Best when the number of iterations is known          | Best when the number of iterations is unknown                                 |
| Initialization  | Declared within the loop header                      | Declared outside the loop                                                     |
| Condition Check | Checked before every iteration                       | Checked before every iteration, but requires external control for termination |

### Example:

#### `for` Loop Example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### `while` Loop Example:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
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

### Adding an Element

There are multiple ways to add elements to an array:

### 1. Using Index Assignment

```javascript
const myArray = [1, 2, 3];
myArray[3] = 4;
console.log(myArray); // [1, 2, 3, 4]
```

### 2. Using `push()` (Adds to the End)

```javascript
const myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]
```

### 3. Using `unshift()` (Adds to the Beginning)

```javascript
const myArray = [1, 2, 3];
myArray.unshift(10);
console.log(myArray); // [10, 1, 2, 3]
```

---

### Removing an Element

There are multiple ways to remove elements from an array:

### 1. Using `pop()` (Removes from the End)

```javascript
const myArray = [1, 2, 3];
const element = myArray.pop();
console.log(myArray); // [1, 2]
console.log(element); // 3
```

### 2. Using `shift()` (Removes from the Beginning)

```javascript
const myArray = [1, 2, 3];
const element = myArray.shift();
console.log(myArray); // [2, 3]
console.log(element); // 1
```

### 3. Using `splice()` (Removes Elements at a Specific Index)

```javascript
const myArray = [1, 2, 3];
myArray.splice(1, 2); // Removes 2 elements starting from index 1
console.log(myArray); // [1]
```

### Difference Between for, for...of, and for...in Loops ✔

| Loop Type  | Use Case                    | Works On                    | Iterates Over                                     | Best For                            |
| ---------- | --------------------------- | --------------------------- | ------------------------------------------------- | ----------------------------------- |
| `for`      | General-purpose loop        | Arrays, Strings             | Index-based iteration                             | When you need an index              |
| `for...of` | Iterating values            | Arrays, Strings, Maps, Sets | Values of iterable objects                        | When you only need values           |
| `for...in` | Iterating object properties | Objects (including Arrays)  | Keys (indexes for arrays, properties for objects) | When looping over object properties |

### Sum Formula Notes

1. The sum formula is used to calculate the total sum of a series.
2. General Formula:
   - Sum of first n natural numbers: **S = n(n+1)/2**
3. Example:
   - If n = 5, then S = 5(5+1)/2 = 15
4. This formula helps in quickly finding the sum without looping through numbers.

### Sum of Geometric Progression

Formula: **2^(n-1)**  
 This formula represents the sum of a geometric progression where each term is double the previous one.  
 Example: If n = 4, then  
 Sum = 2^(4-1) = 2^3 = 8

### Sum of Squares of First n Natural Numbers

Formula: **n(n+1)(2n+1)/6**  
 This formula calculates the sum of the squares of the first n natural numbers.  
 Example: If n = 3, then  
 Sum = 3(3+1)(2\*3+1)/6 = 3(4)(7)/6 = 14

# String ✔

A **string** is a sequence of characters.<br>
![string](../img/string.png) <br>

### Creation and Initialization

```js
const s = "A string primitive";
const s2 = new String("A String object");
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

### Get All Combinations of a String

```javascript
function combinations(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    var comb = "";
    for (let j = i; j < str.length; j++) {
      comb += str[j];
      arr.push(comb);
    }
  }
  return arr;
}
console.log(combinations("car"));
```

### indexOf()

Finds the index of the first occurrence of a substring within a string. Returns -1 if not found.

```js
console.log("hello world".indexOf("world")); // Output: 6
console.log([1, 2, 3, 4].indexOf(3)); // Output: 2
```

### substring()

Extracts a portion of a string between two indices (start and end but excludes end).

```js
console.log("hello world".substring(0, 5)); // Output: "hello"
console.log("abcdef".substring(2)); // Output: "cdef" (if `end` is omitted, extracts till the end)
```

# Object ✔

An **object** is a collection of key-value pairs where each key is a property.

### Initialization

// object literal syntax

```js
let bio = {
  name: "Sam",
  address: "J.P.Nagar",
};
```

// object constructor syntax

```js
let user = new Object();
```

### Accessing Properties

```js
console.log(bio.name); // "Sam"
console.log(bio["address"]); // "J.P.Nagar"
```

### Traversing an Object

### 1. **Using `for...in` Loop**

```javascript
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}
```

### 2. **Using `Object.entries()` and `map()`**

```javascript
const object = { a: 1, b: 2, c: 3 };
Object.entries(object).map(([key, value]) => {
  console.log(key, value);
});
```

### 3. **Using `Object.keys()` and `forEach()`**

```javascript
const object = { a: 1, b: 2, c: 3 };
Object.keys(object).forEach((key) => {
  console.log(key, object[key]);
});
```

### 4. **Using `Object.values()` (for values only)**

```javascript
const object = { a: 1, b: 2, c: 3 };
Object.values(object).forEach((value) => {
  console.log(value);
});
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

Returns the **absolute value** of a number.and convert Negative to Positive number

```js
console.log(Math.abs(1.2)); // 1.2
console.log(Math.abs(-1.2)); // 1.2
console.log(Math.abs(-10)); // 10
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

### isNaN()

Check if a Value is Not a Number

```js
console.log(isNaN(123)); // false
console.log(isNaN("123")); // false
console.log(isNaN("sam")); // true
```

## Strict Mode in JavaScript

Strict Mode in JavaScript helps catch common coding errors and makes the code more secure. It prevents the use of undeclared variables, duplicate function parameters, and other bad practices.

### Enabling Strict Mode

To enable strict mode, add `'use strict';` at the beginning of a script or function.

```js
"use strict";

x = 10; // ReferenceError: x is not defined
```

### Benefits of Strict Mode

- Prevents the use of undeclared variables.
- Disallows duplicate parameter names.
- Throws an error on assignment to read-only properties.
- Makes debugging easier.

---

## Scope in JavaScript

Scope determines the accessibility (visibility) of variables in JavaScript. There are three types of scope:
![scope](../img/scope.png)<br>

1. **Global Scope**
2. **Local/Function Scope**
3. **Block Scope**

### Global Scope

Variables declared outside a function are in the global scope and can be accessed anywhere in the script.

```js
var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible
}

showGlobal();
console.log(globalVar); // Also accessible
```

### Local or Function Scope

Variables declared inside a function are local and cannot be accessed outside of it.

```js
function showLocal() {
  var localVar = "I am local";
  console.log(localVar); // Accessible inside the function
}

showLocal();
console.log(localVar); // ReferenceError: localVar is not defined
```

### Block Scope

Variables declared with `let` and `const` inside `{}` (curly braces) are block-scoped and cannot be accessed outside the block.

```js
{
  let blockVar = "I am block scoped";
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // ReferenceError: blockVar is not defined
```

### Difference Between `var`, `let`, and `const`

| Feature            | `var`                     | `let`                                | `const`                              |
| ------------------ | ------------------------- | ------------------------------------ | ------------------------------------ |
| **Global Scope**   | Yes, attaches to `window` | Yes, but does not attach to `window` | Yes, but does not attach to `window` |
| **Function Scope** | Yes                       | Yes                                  | Yes                                  |
| **Block Scope**    | No                        | Yes                                  | Yes                                  |
| **Hoisting**       | Hoisted with `undefined`  | Hoisted but not initialized          | Hoisted but not initialized          |

---

## IIFE (Immediately Invoked Function Expression)

### What is IIFE?

An **Immediately Invoked Function Expression (IIFE)** is a function that runs immediately after being defined.

### Syntax:

```javascript
(function () {
  console.log("I am an IIFE");
})();
```

### Why Use IIFE in DSA?

1. **Encapsulation**: Prevents variable pollution in the global scope.
2. **Avoiding Conflicts**: Useful when dealing with recursive functions
3. **Data Privacy**: Keeps data safe from external modifications.
4. **Efficient Memory Usage**: Helps in optimizing space by keeping temporary data in function scope.

### Example in DSA (Factorial Using IIFE)

```javascript
const factorial = (function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
})(5);

console.log(factorial); // Output: 120
```

## Class vs Interface

| Feature        | Class                                 | Interface                                  |
| -------------- | ------------------------------------- | ------------------------------------------ |
| Definition     | A blueprint for creating objects.     | A contract that defines method signatures. |
| Implementation | Contains both methods and properties. | Only contains method declarations.         |
| Instantiation  | Can be instantiated using `new`.      | Cannot be instantiated directly.           |
| Inheritance    | Supports `extends`.                   | Supports multiple `implements`.            |
| Usage          | Used for creating objects.            | Used for defining a structure.             |

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Some generic sound");
  }
}

const dog = new Animal("Dog");
dog.makeSound(); // Output: Some generic sound

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Woof Woof");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Woof Woof
```
