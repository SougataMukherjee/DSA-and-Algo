let arr = ["aaaa", "aaaaaa", "aaaaaaaa", "aaa"];
// let min = Math.min(...arr.map(w => w.length));
// console.log(arr[min]);
let min = arr.sort((a, b) => a.length - b.length);
console.log(min[0]);
