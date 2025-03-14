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
console.log(typeof z);
```

### Answer:

**Output:** `string`
**Note:** z=''
