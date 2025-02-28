# Hashing

Hashing is a technique used in data structures that efficiently stores and retrieves data, allowing for quick access.

Hashing allows search, insert, and delete operations in O(1) time on average.

### Internal Working of Hashing

![hashing](../img/hashing.png) <br>
Hashing uses a hash function to convert keys into hash codes (index values).

These hash codes are then used to index the corresponding values in a hash table.

# Hash Map

A Hash Map is a common data structure used to store key-value pairs for efficient data retrieval.

### Important Points

> Keys may be duplicate, but values must be unique.

> Hash maps are unordered.

> Provides fast operations like search, insert, modify, and delete.

Methods
Insert Data

```
let mapObj = new Map();
mapObj.set("Sam", 21);
mapObj.set("Rik", 22);
mapObj.set("Lav", 23);
```

Fetch Value

```
console.log(mapObj.get("Sam")); // Output: 21
console.log(mapObj.get("John")); // Output: undefined
```

Modify Value

```
mapObj.set("Lav", 25);
console.log(mapObj.get("Lav")); // Output: 25
```

Search for a Key

```
console.log(mapObj.has("Sam")); // Output: true
console.log(mapObj.has("John")); // Output: false
```

Return All Keys

```
console.log([...mapObj.keys()]); // Output: [ 'Sam', 'Rik', 'Lav' ]
```

### HashMap vs HashTable

| HashMap          | HashTable                |
| ---------------- | ------------------------ |
| Allows null keys | Does not allow null keys |
| Not synchronized | Synchronized             |
| Faster           | Slower                   |
| Unordered        | Ordered                  |
