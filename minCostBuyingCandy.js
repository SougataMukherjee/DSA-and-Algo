function minimumCost(cost) {
  cost.sort((a, b) => a - b);

  let res = 0;
  const n = cost.length;

  for (let i = 0; i < n; ++i) {
    //skip every third item in the array because every third item is free, like buy two, get one free
    if (i % 3 !== n % 3) {
      res += cost[i];
    }
  }

  return res;
}
