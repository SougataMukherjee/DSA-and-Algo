function removeConsecutive(arr) {
  let store = [],
    n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else if (store.length === 0 || store[store.length - 1] !== arr[i]) {
      store.push(arr[i]);
    } else {
      store.pop();
    }
  }
  return store;
}
console.log(removeConsecutive([1, 2, 2, 3, 4, 4])); //[ 1, 2, 3, 4 ]
