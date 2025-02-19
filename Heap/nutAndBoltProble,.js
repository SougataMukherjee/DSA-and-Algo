function matchPairs(n, nuts, bolts) {
  const order = ["!", "#", "$", "%", "&", "*", "@", "^", "~"];

  let i1 = 0,
    i2 = 0;

  for (const value of order) {
    for (let j = 0; j < n; j++) {
      if (bolts[j] === value) {
        [bolts[j], bolts[i1]] = [bolts[i1], bolts[j]]; // Swap
        i1++;
      }
    }

    for (let j = 0; j < n; j++) {
      if (nuts[j] === value) {
        [nuts[j], nuts[i2]] = [nuts[i2], nuts[j]]; // Swap
        i2++;
      }
    }
  }
}
