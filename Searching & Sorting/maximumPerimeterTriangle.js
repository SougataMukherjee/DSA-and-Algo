function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => a - b);

  for (let i = sticks.length - 1; i >= 2; i--) {
    if (sticks[i] < sticks[i - 1] + sticks[i - 2]) {
      return [sticks[i - 2], sticks[i - 1], sticks[i]];
    }
  }

  return [-1];
}
