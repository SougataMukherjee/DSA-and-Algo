function canCompleteCircuit(gas, cost) {
  let sumGas = 0,
    sumCost = 0,
    currGas = 0,
    result = 0;

  for (let i = 0; i < gas.length; i++) {
    sumGas += gas[i];
    sumCost += cost[i];

    currGas += gas[i] - cost[i];

    if (currGas < 0) {
      result = i + 1;
      currGas = 0;
    }
  }

  return sumGas < sumCost ? -1 : result;
}
