function leaders(a) {
  let n = a.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    let j;
    for (j = i + 1; j < n; j++) {
      if (a[i] < a[j]) {
        break;
      }
    }
    if (j === n) {
      // If the loop didn't break
      ans.push(a[i]);
    }
  }

  return ans;
}
