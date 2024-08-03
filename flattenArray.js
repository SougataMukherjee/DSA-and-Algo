function flattenArray(arr) {
  return arr.flat(Infinity); //arr.flat(2)
}
const arr = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(arr));
