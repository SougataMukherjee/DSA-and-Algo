## JavaScript Interview Question

### Question 1: What will be the output?

```js
let x = 1 > 2 > 3;
console.log(x);
```

### Answer:

**Output:** `false`

### Question 2: What will be the output?

```js
let x = false;
let y = "0";
let z = 0;
console.log(x == y);
console.log(x == z);
```

### Answer:

**Output:** `true  true`

### Question 3: What will be the output?

```js
let x = "hello";
let y = new String("hello");
console.log(x == y);
console.log(x === y);
```

### Answer:

**Output:** `true  false`

### Question 4: What will be the output?

```js
let x = Infinity;
console.log(typeof x);
```

### Answer:

**Output:** `number`

### Question 5: What will be the output?

```js
let x = [];
let y = [];
let z = x + y;
console.log(typeof z, z);
```

### Answer:

**Output:** `string  ''`

### Question 6: What will be the output?

```js
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a + b);
```

### Answer:

**Output:** `1,2,34,5,6`

### Question 7: What will be the output?

```js
let x = true;
let y = false;
let z = x + y && x * y;
console.log(z);
```

### Answer:

**Output:** `0`

### Question 8: What will be the output?

```js
let x = "false";
let y = !x;
console.log(y);
```

### Answer:

**Output:** `false`

### Question 9: What will be the output?

```js
let x = 1;
let y = "1";
console.log(++x, ++y);
```

### Answer:

**Output:** `2  2`

### Question 10: What will be the output?

```js
let x = [2];
let y = 2;
console.log(x == y);
```

### Answer:

**Output:** `true`

### Question 11: What will be the output?

```js
const a = { b: { c: 2 } };
const b = { ...a };
a.b.c = 3;
console.log(b.b.c);
```

### Answer:

**Output:** `3`

### Question 12: What will be the output?

```js
let x = [1, 2, 3];
let y = x.map((num) => {
  x.push(num + 3);
  return num + 1;
});
console.log(y);
```

### Answer:

**Output:** `[ 2, 3, 4 ]`

### Question 13: What will be the output?

```js
let x = { a: 1 };
let y = Object.assign({}, x);
console.log(x === y);
```

### Answer:

**Output:** `false`

### Question 14: What will be the output?

```js
let x = 10;
let y = 20;
console.log("total = " + x + y);
```

### Answer:

**Output:** `total = 1020`

### Question 15: What will be the output?

```js
const arr = [1, 2, 3];
arr.forEach((num) => num * 2);
console.log(arr);
```

### Answer:

**Output:** `[1,2,3]`

### Question 16: What will be the output?

```js
let a = [1, 2, 3];
a.push(a[2]++);
console.log(a);
```

### Answer:

**Output:** `[ 1, 2, 4, 3 ]`

### Question 17: What will be the output?

```js
let x = [1, 2, 3];
let y = x.join("");
console.log(typeof y);
```

### Answer:

**Output:** `string`

### Question 18: What will be the output?

```js
let margin = "10px"; //10.5
let x = parseInt(margin);
console.log(parseInt(x));
```

### Answer:

**Output:** `10`

### Question 19: What will be the output?

```js
let x = [null, 0, "0", false, "a", "", 1];
let y = x.filter((value) => value);
console.log(y);
```

### Answer:

**Output:** `[ '0', 'a' ,1]`

### Question 20: What will be the output?

```js
let x = 1;
console.log(x + x++);
```

### Answer:

**Output:** `2`
