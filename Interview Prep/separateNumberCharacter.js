const mixedArray = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e"];
const numbers = mixedArray.filter((item) => typeof item === "number");
const characters = mixedArray.filter((item) => typeof item === "string");
console.log("Numbers:", numbers); // [1, 2, 3, 4, 5]
console.log("Characters:", characters); // ['a', 'b', 'c', 'd', 'e']
