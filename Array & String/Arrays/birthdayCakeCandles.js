function birthdayCakeCandles(candles) {
  let maximum = 0;
  let result = 0;

  for (let candle of candles) {
    if (candle > maximum) {
      maximum = candle;
      result = 1; // Reset count since we found a new max
    } else if (candle === maximum) {
      result++;
    }
  }

  return result;
}
