function minimumMoney(transactions) {
  let sumDiff = 0;
  let maxTerm = 0;

  for (const transaction of transactions) {
    const [cost, cashback] = transaction;

    if (cost > cashback) {
      sumDiff += cost - cashback;
      maxTerm = Math.max(maxTerm, cashback);
    } else {
      maxTerm = Math.max(maxTerm, cost);
    }
  }

  return sumDiff + maxTerm;
}
