function totalFruit(fruits) {
  let max = 0;
  let currentMax = 0;
  let lastcount = 0;
  let lastfruit = -1;
  let secondlastfruit = -1;

  for (let fruit of fruits) {
    if (fruit == lastfruit || fruit == secondlastfruit) {
      currentMax += 1;
    } else {
      currentMax = lastcount += 1;
    }

    if (fruit == lastfruit) {
      lastcount++;
    } else {
      lastcount = 1;
    }

    if (fruit !== lastfruit) {
      secondlastfruit = lastfruit;
      lastfruit = fruit;
    }
    max = Math.max(currentMax, max);
  }
  return max;
}
