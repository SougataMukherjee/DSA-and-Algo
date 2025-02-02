function removeConsecutive(arr) {
  let n = arr.length;
  let st = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    if (st.length === 0 || st[st.length - 1] !== arr[i]) {
      st.push(arr[i]);
    } else if (arr[i] !== arr[i + 1] || i === n - 1) {
      st.pop();
    }
  }
  return st;
}
console.log(removeConsecutive([1, 2, 2, 3, 4, 4])); //[ 1, 2, 3, 4 ]
